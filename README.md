<br>

<div align="center">

[<img src="./resources/icon.png" width="144"/>](https://hydralauncher.site)

  <h1 align="center">Hydra Launcher</h1>

  <p align="center">
    <strong>Hydra - это игровой лаунчер с собственным встроенным bittorrent-клиентом.</strong>
  </p>

[![build](https://img.shields.io/github/actions/workflow/status/hydralauncher/hydra/build.yml)](https://github.com/hydralauncher/hydra/actions)
[![release](https://img.shields.io/github/package-json/v/hydralauncher/hydra)](https://github.com/hydralauncher/hydra/releases)

[![pt-BR](https://img.shields.io/badge/lang-pt--BR-green.svg)](./README.pt-BR.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![ru](https://img.shields.io/badge/lang-ru-yellow.svg)](./README.ru.md)
[![uk-UA](https://img.shields.io/badge/lang-uk--UA-blue)](./README.uk-UA.md)
[![be](https://img.shields.io/badge/lang-be-orange)](./README.be.md)
[![es](https://img.shields.io/badge/lang-es-red)](./README.es.md)
[![fr](https://img.shields.io/badge/lang-fr-blue)](./README.fr.md)
[![de](https://img.shields.io/badge/lang-de-black)](./README.de.md)
[![ita](https://img.shields.io/badge/lang-it-red)](./README.it.md)
[![cs](https://img.shields.io/badge/lang-cs-purple)](./README.cs.md)
[![da](https://img.shields.io/badge/lang-da-red)](./README.da.md)
[![nb](https://img.shields.io/badge/lang-nb-blue)](./README.nb.md)
[![ee](https://img.shields.io/badge/lang-et-blue.svg)](./README.et.md)

![Hydra Catalogue](./docs/screenshot.png)

</div>

## Таблица с содержанием

- [Таблица с содержанием](#Таблица-с-содержанием)
- [О Hydra](#О-Hydra)
- [Функции](#Функции)
- [Установка](#Установка)
- [Contributing](#-contributing)
  - [Join our Telegram](#-join-our-telegram)
  - [Fork and clone your repository](#fork-and-clone-your-repository)
  - [Ways you can contribute](#ways-you-can-contribute)
  - [Project Structure](#project-structure)
- [Build from source](#build-from-source)
  - [Install Node.js](#install-nodejs)
  - [Install Yarn](#install-yarn)
  - [Install Node Dependencies](#install-node-dependencies)
  - [Install Python 3.9](#install-python-39)
  - [Install Python Dependencies](#install-python-dependencies)
- [Environment variables](#environment-variables)
- [Running](#running)
- [Build](#build)
  - [Build the bittorrent client](#build-the-bittorrent-client)
  - [Build the Electron application](#build-the-electron-application)
- [Contributors](#contributors)
- [License](#license)

## About

**Hydra** — это **программа запуска игр** со встроенным **BitTorrent-клиентом**.
<br>
Программа запуска написана на TypeScript (Electron) и Python, который управляет торрент-системой с помощью libtorrent.

## Функции

- Собственный встроенный BitTorrent-клиент.
- Интеграция How Long To Beat (HLTB) на странице игры.
- Настройка пути загрузки.
- Поддержка Windows и Linux
- Постоянно обновляется
- И еще...

## Installation

Follow the steps below to install:

1. Download the latest version of Hydra from the [Releases](https://github.com/hydralauncher/hydra/releases/latest) page.
   - Download only .exe if you want to install Hydra on Windows.
   - Download .deb or .rpm or .zip if you want to install Hydra on Linux. (depends on your Linux distro)
2. Run the downloaded file.
3. Enjoy Hydra!

## <a name="contributing"> Contributing

### <a name="join-our-telegram"></a> Join our Telegram

We concentrate our discussions on our [Telegram](https://t.me/hydralauncher) channel.

### Fork and clone your repository

1. Fork the repository [(click here to fork now)](https://github.com/hydralauncher/hydra/fork)
2. Clone your forked code `git clone https://github.com/your_username/hydra`
3. Create a new branch
4. Push your commits
5. Submit a new Pull Request

### Как вы можете внести свой вклад

Перевод: Мы хотим, чтобы Hydra была доступна как можно большему количеству людей. Не стесняйтесь помогать переводить на новые языки или обновлять и улучшать те, которые уже доступны на Hydra.
- Код: Hydra создана с использованием Typescript, Electron и небольшого количества Python. Если вы хотите внести свой вклад, присоединяйтесь к нам [Telegram](https://t.me/hydralauncher)!

### Структура проекта

- torrent-client: мы используем libtorrent, библиотеку Python, для управления торрент-загрузками.
- src/renderer: пользовательский интерфейс приложения.
- src/main: вся логика находится здесь.

## Build from source

### Install Node.js

Ensure you have Node.js installed on your machine. If not, download and install it from [nodejs.org](https://nodejs.org/).

### Install Yarn

Yarn is a package manager for Node.js. If you haven't installed Yarn yet, you can do so by following the instructions on [yarnpkg.com](https://classic.yarnpkg.com/lang/en/docs/install/).

### Install Node Dependencies

Navigate to the project directory and install the Node dependencies using Yarn:

```bash
cd hydra
yarn
```

### Install Python 3.9

Ensure you have Python 3.9 installed on your machine. You can download and install it from [python.org](https://www.python.org/downloads/release/python-3913/).

### Install Python Dependencies

Install the required Python dependencies using pip:

```bash
pip install -r requirements.txt
```

## Environment variables

You'll need an SteamGridDB API Key in order to fetch the game icons on installation.

Once you have it, you can copy or rename the `.env.example` file to `.env` and put it on`STEAMGRIDDB_API_KEY`.

## Running

Once you've got all things set up, you can run the following command to start both the Electron process and the bittorrent client:

```bash
yarn dev
```

## Build

### Build the bittorrent client

Build the bittorrent client by using this command:

```bash
python torrent-client/setup.py build
```

### Build the Electron application

Build the Electron application by using this command:

On Windows:

```bash
yarn build:win
```

On Linux:

```bash
yarn build:linux
```

## Contributors

<a href="https://github.com/hydralauncher/hydra/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hydralauncher/hydra" />
</a>

## License

Hydra is licensed under the [MIT License](LICENSE).
