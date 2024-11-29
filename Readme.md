# Discord Bot Starter Template 🚀

Welcome to the **Discord Bot Starter Template**! This project serves as a foundation for building feature-rich and scalable Discord bots using the [Discord.js](https://discord.js.org) library. It incorporates modular design, dynamic command loading, error handling, and best practices to streamline bot development.

---

## 🌟 Features

#### ✨ **Modular Command System**  
Organized by categories, making it easy to add or edit commands.  
- **Slash Commands** `/help`, `/ping`, `/info`, etc.
- **Prefix Commands** `!help`, `!ping`, and more.
- **Moderation Tools** Ban, Mute, Timeout, Warn.
- **Fun Commands** Generate jokes and interactive fun features.

#### ⚙️ **Event Handling**  
Built-in support for all major Discord events, including custom events.  
- **Dynamic Command and Event Loading** Auto-load commands and events for scalability.

#### 📜 **Configuration Management**  
Easily manage settings like bot tokens and prefixes using `.env` or JSON config files.  

#### 📡 **API Integrations**  
Includes examples for GitHub, RSS feeds, and more.  

#### 🛠️ **Utility Functions**  
Pre-built utilities for logging, embed creation, and more to streamline development.  
- **Utilities** Includes logging, error handling, embed builders, and more.

#### 💾 **Database Support**  
Ready-to-use structure for integrating MongoDB or other databases.  

#### 🔒 **Secure and Scalable**  
Follows best practices for secure token handling and scalable architecture.  
- **Error Handling** Centralized and robust error management.

---

## 🚀 Getting Started

### 📂 Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) v16.6.0 or higher.
- npm v7 or higher
- [Discord Developer Portal](https://discord.com/developers/applications) account to create a bot and get your bot token.

### 🛠️ Installation
Follow these steps to set up the bot on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/nexoscreation/discord-bot-template.git
cd discord-bot-template
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a .env file in the root directory and add:
```env
DISCORD_BOT_TOKEN=
DISCORD_BOT_PREFIX=!
DISCORD_BOT_CLIENT_ID=
DISCORD_BOT_CLIENT_SECRET=
DISCORD_GUILD_ID=
```

### 📜 Usage

#### Start the bot: (Production)

You can run the bot using the following command:
```bash
npm run bot:start
```

#### Start the bot: (Devlopment)

Support hot reload:
```bash
npm run dev
```

### Useful Commands ⚙️

#### Deploy new commands
To deploy all slash commands to your Discord guild, run:
```bash
npm run bot:deploy
```

#### Delete all application (/) commands
To delete all the existing slash commands in your Discord guild, run:
```bash
npm run bot:delete
```

This command loads all command files from the commands directory, and then deploys them to your specified guild.

---

## 📂 Directory Structure

```plaintext
.
├── basics/                     # Prefix-based commands
├── commands/                   # Slash commands
│   ├── fun/                    # Fun-related commands
│   ├── info/                   # Informational commands
│   ├── moderation/             # Moderation commands
├── events/                     # Bot event handlers
├── utils/                      # Utility functions
├── .env                        # Environment variables
├── index.js                    # Main entry point
├── delete-commands.js          # Script for deleting all slash commands
├── deploy-commands.js          # Script for deploying slash commands
├── package.json                # Dependencies and metadata
└── README.md                   # Project documentation
```

---

## 📜 Available Commands
The bot will go online and listen for both prefix commands (!) and slash commands (/).

| Command          | Description                           |
|------------------|---------------------------------------|
| `/ping`          | Responds with "Pong!"                |
| `/github user`   | Fetches GitHub user data             |
| `/github repo`   | Fetches GitHub repository details    |
| `/help`          | Lists all available commands         |
| `/ban`           | Bans a user (requires permissions)   |

## 🛡️ Moderation Commands

- /ban [user]: Bans a user from the server.
- /mute [user]: Temporarily mutes a user.
- /timeout [user]: Applies a timeout to a user.
- /warn [user]: Issues a warning to a user.

---

## 📚 Utilities
- Embed Builder: Create custom embeds using utils/embedBuilder.js.
- Logger: Log bot activities and errors with different severity levels.
- Error Handler: Centralized error handling for consistency.

---

## 📚 Documentation
Comming Soon!
- [Getting Started Guide](#🚀-getting-started)  
- [Project Structure](#📂-project-structure)  
- [Command Examples](src/commands/)  
- [Event Listeners](src/events/)  
- [API Integration Helpers](src/utils/api/)  

---

## 🤝 Contributing

We welcome contributions from the community! Here’s how you can help:

1. Fork the repository.  
2. Create a new branch (`git checkout -b feature/your-feature-name`).  
3. Make your changes and test thoroughly.  
4. Submit a pull request with a detailed description.  

---

## 🛡️ License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 💬 Support
Need help? Have suggestions? Feel free to open an issue or reach out:  

- **Discord Server**: [Join Us](https://discord.gg/A3euTAVqHv)  
- **GitHub Issues**: [Create an Issue](https://github.com/nexoscreator/bot-discord-starter/issues)  

---

## 🌟 Support the Project

If you find this project helpful, consider giving it a ⭐️ on GitHub to show your support!

---

## 🎉 Acknowledgments

Special thanks to the open-source community for their contributions and inspiration!

- [Discord.js](https://discord.js.org/) for the Discord API wrapper.
- All contributors and users of this template.

---

Thank you for using the Discord Bot Starter Template! Happy coding! 🎉
