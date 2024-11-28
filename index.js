const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Discord Client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Access guild-related events
    GatewayIntentBits.GuildVoiceStates, // Monitor voice state changes
    GatewayIntentBits.GuildMembers, // Privileged: Requires "Server Members Intent"
    GatewayIntentBits.GuildMessages, // Access messages in guild channels
    GatewayIntentBits.MessageContent, // Privileged: Access message content
  ],
});

// Collection to store bot commands
client.commands = new Collection();

/**
 * Load Basic Commands
 * Commands stored in the `basics/` directory
 */
const BasicCommandFiles = fs.readdirSync('./basics').filter(file => file.endsWith('.js'));
for (const file of BasicCommandFiles) {
  const command = require(`./basics/${file}`);
  client.commands.set(command.name, command);
}


/**
 * Load Slash Commands
 * Commands categorized into folders under `commands/`
 */
const commandsPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
  const folderPath = path.join(commandsPath, folder);
  const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(folderPath, file);
    const command = require(filePath);

    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing "data" or "execute".`);
    }
  }
}


/**
 * Load Event Listeners
 * Events stored in the `events/` directory
 */
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);

  // Dynamically register events
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

/**
 * Error Handling
 * Logs errors gracefully to prevent bot crashes
 */
client.on('error', console.error); // Handle client errors
client.on('shardError', (error) => {
  console.error('A websocket connection encountered an error:', error);
});

/**
 * Message Listener for Prefix Commands
 */
// event/messageCreate.js

/**
 * Bot Login
 * Authenticates the bot using the token from `.env`
 */
client.login(process.env.DISCORD_BOT_TOKEN)
  .then(() => console.log('✅ Bot started successfully!'))
  .catch(console.error); // Log authentication errors
