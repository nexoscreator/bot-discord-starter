/**
 * Event: ready
 * Triggered when the bot successfully logs in and is ready.
 */
const { GatewayIntentBits } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true, // Run this event only once
  execute(client) {
    const requiredIntents = [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ];

    const missingIntents = requiredIntents.filter((intent) => !client.options.intents.has(intent));

    if (missingIntents.length > 0) {
      console.warn(
        '⚠️ Warning: The bot may not function correctly because it lacks the following intents:',
        missingIntents
      );
    }

    console.log(`✅ Logged in as ${client.user.tag}`);
    console.log(`📊 Connected to ${client.guilds.cache.size} servers.`);

    // Set bot's presence
    client.user.setPresence({
      activities: [{ name: 'with Discord.js', type: 'PLAYING' }],
      status: 'online', // Options: online, idle, dnd, invisible
    });

    console.log('🤖 Bot is ready and operational!');
  },
};
