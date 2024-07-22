# Discord Bot Starter Template

Welcome to the Discord Bot Starter Template! This template aims to provide a simple and easy-to-use starting point for developers who want to create their own Discord bots. 

## Features

- Basic bot structure with command and event handling.
- Environment variable configuration.
- Example commands to get you started.
- Detailed documentation and comments in the code.
- Easy setup and deployment.


- Basic Commands (help, ping, etc...)
- Moderation Commands (ban, kick, timeout, mute, etc...)
- Utility Commands (info, clear, ping, etc...)
- Music Commands (play, pause, stop, skip, etc...)
- Many Event like welcome message, leave message etc..
- Also Youtube video notify, Blog post notify, github post
- Auto Mod spam protection and other

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher) for JavaScript bots.
- [Discord Developer Portal](https://discord.com/developers/applications) account to create a bot and get your bot token.

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/nexoscreator/bot-discord-starter.git
    cd bot-discord-starter
    ```

2. **Install dependencies:**

    For JavaScript (Node.js) bot:
    ```sh
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory and add your bot token:

    ```env
    DISCORD_TOKEN=your-bot-token-here
    ```

### Running the Bot

 For JavaScript (Node.js) bot:
```sh
node index.js
```
 Also
```sh
npm start
```
 Deploy slash connamds
```sh
npm start:deploy
```
 Delete Slash Commands
```sh
npm start:delete
```



## Usage

Here are some example commands included in the template:

- **ping**: Responds with "Pong!" to test if the bot is running.
- **help**: Lists all available commands.

## Contributing

We welcome contributions! If you have any suggestions or improvements, please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Discord.js](https://discord.js.org/) for the Discord API wrapper.
- All contributors and users of this template.
