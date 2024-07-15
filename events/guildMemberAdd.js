const { welcomeChannelId } = require('./../config/bot.json');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        // Fetch the welcome channel
        const channel = member.guild.channels.cache.get(welcomeChannelId);
        // Check if the channel exists
        if (!channel) return;
        const welcomeMessage = `
    🎉 Welcome to **${member.guild.name}**, ${member}!
    
    We're excited to have you here. Please take a moment to check out the following channels:
    - 📜 **rules**: Familiarize yourself with our server rules.
    - 🎉 **announcements**: Stay updated with the latest news and events.
    - 💬 **general**: Join the conversation with other members.

    If you have any questions, feel free to ask in **#support** or reach out to the moderators.
    
    Enjoy your stay! 😊
    `;
        // Send a message to the channel
        channel.send(welcomeMessage);
        // Optional: Send a direct message to the new member
        member.send(`Hi ${member.displayName}, welcome to our Discord server! We are glad to have you here.`);
    },
};
