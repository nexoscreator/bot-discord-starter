const { welcomeChannelId } = require('./../config/bot.json');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        // Fetch the welcome channel
        const channel = member.guild.channels.cache.get(welcomeChannelId);
        // Check if the channel exists
        if (!channel) return;
        // Create the welcome embed
        const welcomeEmbed = new MessageEmbed()
            .setColor('#00f576') // Set the color of the embed
            .setTitle('Welcome to the Server!')
            .setURL("https://www.nexoscreation.com")
            .setDescription(`Hello ${member}, welcome to **${member.guild.name}**! We're glad to have you here.`)
            .addField('Get Started', 'Here are a few tips to get you started:')
            .addField('1. Read the Rules', 'Make sure to read the server rules in the #rules channel.')
            .addField('2. Introduce Yourself', 'Feel free to introduce yourself in the #introductions channel.')
            .addField('3. Have Fun!', 'Join the conversation in the various channels and have a great time!')
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter('Nexos Creator', 'https://nexoscreation.com/logo.png')
            .setTimestamp();
        // Send a message to the channel
        channel.send(`Hi ${member.displayName}, welcome to our Discord server! We are glad to have you here.`);
        // Optional: Send a direct message to the new member
        member.send({ embeds: [welcomeEmbed] });
    },
};
