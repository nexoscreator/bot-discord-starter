const fs = require('node:fs');
// const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');  //initializes dotenv
dotenv.config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

client.commands = new Collection();

// basic command
const BasicCommandFiles = fs.readdirSync('./commands/basics').filter(file => file.endsWith('.js'));
for (const file of BasicCommandFiles) {
	const command = require(`./commands/basics/${file}`);
	client.commands.set(command.name, command);
}

// slash command
const SlashCommandFiles = fs.readdirSync('./commands/utility').filter(file => file.endsWith('.js'));
for (const file of SlashCommandFiles) {
    const command = require(`./commands/utility/${file}`);
    client.commands.set(command.data.name, command);
}

// events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('messageCreate', message => {
	if (!message.content.startsWith(process.env.BOT_PREFIX) || message.author.bot) return;

	const args = message.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error executing that command.');
	}
});

// Error handling
client.on('error', console.error);
client.on('shardError', (error) => {
	console.error('A websocket connection encountered an error:', error);
});


// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN)
	.then(() => console.log('Bot logged in successfully'))
	.catch(console.error);