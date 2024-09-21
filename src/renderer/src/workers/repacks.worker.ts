import { repacksTable } from "@renderer/dexie";
import { formatName } from "@shared";
import { GameRepack } from "@types";
import flexSearch from "flexsearch";

const index = new flexSearch.Index();

const state = {
  repacks: [] as any[],
};

interface SerializedGameRepack extends Omit<GameRepack, "uris"> {
  uris: string;
}

self.onmessage = async (
  event: MessageEvent<[string, string] | "INDEX_REPACKS">
) => {
  if (event.data === "INDEX_REPACKS") {
    repacksTable
      .toCollection()
      .sortBy("uploadDate")
      .then((results) => {
        state.repacks = results.reverse();

        for (let i = 0; i < state.repacks.length; i++) {
          const repack = state.repacks[i];
          const formattedTitle = formatName(repack.title);
          index.add(i, formattedTitle);
        }

        self.postMessage("INDEXING_COMPLETE");
      });
  } else {
    const [requestId, query] = event.data;

    const results = index.search(formatName(query)).map((index) => {
      const repack = state.repacks.at(index as number) as SerializedGameRepack;

      const uris = JSON.parse(repack.uris);

      return {
        ...repack,
        uris: [...uris, repack.magnet].filter(Boolean),
      };
    });

    const channel = new BroadcastChannel(`repacks:search:${requestId}`);

    channel.postMessage(results);
  }
};