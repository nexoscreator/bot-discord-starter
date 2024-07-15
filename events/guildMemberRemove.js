const { leaveChannelId } = require('./../config/bot.json');

module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        // Fetch the welcome channel
        const channel = member.guild.channels.cache.get(leaveChannelId);
        // Check if the channel exists
        if (!channel) return;
        const leaveMessage = `
    😢 ${member.user.tag} has left the server. We'll miss you!
    
    If you ever decide to come back, we'll be here with open arms. Farewell!
    `;
        // Send a message to the channel
        channel.send(leaveMessage);
        // Optional: Send a direct message to the new member
        // member.send(`We're sorry to see you go, ${member.displayName}. Goodbye!`);
    },
};
