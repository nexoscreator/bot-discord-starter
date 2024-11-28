/**
 * Event: guildCreate
 * Triggered when the bot is added to a new server.
 */
module.exports = {
  name: 'guildCreate',
  execute(guild) {
    console.log(`➕ Joined new server: ${guild.name} (${guild.id})`);
    guild.systemChannel?.send(
      '👋 Hello! Thanks for inviting me to your server. Use `/help` to get started!'
    );
  },
};
