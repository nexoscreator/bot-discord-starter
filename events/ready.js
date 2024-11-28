/**
 * Event: ready
 * Triggered when the bot successfully logs in and is ready.
 */
module.exports = {
  name: 'ready',
  once: true, // Run this event only once
  execute(client) {
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
