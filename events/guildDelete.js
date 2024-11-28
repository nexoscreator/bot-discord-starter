/**
 * Event: guildDelete
 * Triggered when the bot is removed from a server.
 */
module.exports = {
  name: 'guildDelete',
  execute(guild) {
    console.log(`➖ Removed from server: ${guild.name} (${guild.id})`);
  },
};
