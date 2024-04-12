import { gameRepository } from "@main/repository";
import { generateYML } from "../misc/generate-lutris-yaml";
import path from "node:path";
import fs from "node:fs";
import { writeFile } from "node:fs/promises";
import { spawn, spawnSync } from "node:child_process";

import { registerEvent } from "../register-event";
import { shell } from "electron";
import { getDownloadsPath } from "../helpers/get-downloads-path";

const openGame = async (
  _event: Electron.IpcMainInvokeEvent,
  gameId: number
) => {
  const game = await gameRepository.findOne({ where: { id: gameId } });

  if (!game) return;

  const gamePath = path.join(
    game.downloadPath ?? (await getDownloadsPath()),
    game.folderName
  );

  if (fs.existsSync(gamePath)) {
    const setupPath = path.join(gamePath, "setup.exe");
    console.log(setupPath);
    if (fs.existsSync(setupPath)) {
      if (process.platform === "win32") {
        shell.openExternal(setupPath);
      } 
      if (process.platform === "linux") {
        if (spawnSync('which', ['lutris']).status === 0) {
          const ymlPath = path.join(gamePath, "setup.yml");
          console.log(ymlPath)
          await writeFile(ymlPath, generateYML(game));
          const lutris = spawn('lutris', ['--install', `"${ymlPath}"`], {
            shell: true,
            detached: true,
            stdio: 'ignore'
          });
          lutris.unref();
        } else {
          const wine = spawn('wine', [`"${setupPath}"`], {
            shell: true,
            detached: true,
            stdio: 'ignore'
          });
          wine.unref();
        }
      }
    } else {
      shell.openPath(gamePath);
    }
  } else {
    await gameRepository.delete({
      id: gameId,
    });
  }
};

registerEvent(openGame, {
  name: "openGame",
});
