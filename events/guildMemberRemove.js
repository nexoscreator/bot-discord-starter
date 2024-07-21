const { LEAVE_ID } = require('./../config/guilds.json');

module.exports = {
  name: 'guildMemberRemove',
  execute(member) {
    // Fetch the welcome channel
    const channel = member.guild.channels.cache.get(LEAVE_ID);
    // Check if the channel exists
    if (!channel) return;
    const leaveMessage = `😢 ${member.user.tag} has left the server. We'll miss you!`;
    // Send a message to the channel
    channel.send(leaveMessage);
    // Optional: Send a direct message to the new member
    // member.send(`We're sorry to see you go, ${member.displayName}. Goodbye!`);
  },
};