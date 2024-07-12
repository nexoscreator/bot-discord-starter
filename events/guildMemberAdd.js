const { welcomeChannelId } = require('./../config/bot.json');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        // Fetch the welcome channel
        const channel = member.guild.channels.cache.get(welcomeChannelId);
        // Check if the channel exists
        if (!channel) return;
        // Send a message to the channel
        channel.send(`Welcome to the server, ${member}! Feel free to introduce yourself.`);
        // Optional: Send a direct message to the new member
        member.send(`Hi ${member.displayName}, welcome to our Discord server! We are glad to have you here.`);
    },
};
