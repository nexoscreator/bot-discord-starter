const { leaveChannelId } = require('./../config/bot.json');

module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        // Fetch the welcome channel
        const channel = member.guild.channels.cache.get(leaveChannelId);
        // Check if the channel exists
        if (!channel) return;
        // Send a message to the channel
        channel.send(`We're sorry to see you go, ${member.displayName}. Goodbye!`);
        // Optional: Send a direct message to the new member
        member.send(`We're sorry to see you go, ${member.displayName}. Goodbye!`);
    },
};
