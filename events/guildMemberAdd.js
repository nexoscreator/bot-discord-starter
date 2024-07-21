const { WELCOME_ID } = require('./../config/guilds.json');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'guildMemberAdd',
  execute(member) {
    // Fetch the welcome channel
    const channel = member.guild.channels.cache.get(WELCOME_ID);
    // Check if the channel exists
    if (!channel) return;
    // Create the welcome embed
    const welcomeEmbed = new EmbedBuilder()
      .setColor('#00f576') // Set the color of the embed
      .setTitle('Welcome to the Server!')
      .setURL("https://www.nexoscreation.com")
      .setDescription(`Hello **${member.displayName}**, welcome to **${member.guild.name}**! We're glad to have you here.`)
      .addFields({ name: 'Get Started', value: 'Here are a few tips to get you started:' }, { name: '1. Read the Rules', value: 'Make sure to read the server rules in the #rules channel.' }, { name: '2. Introduce Yourself', value: 'Feel free to introduce yourself in the #introductions channel.' }, { name: '3. Have Fun!', value: 'Join the conversation in the various channels and have a great time!' }, )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter({ text: 'Nexos Creator', iconURL: 'https://nexoscreation.com/logo.png' })
      .setTimestamp();
    // Send a message to the channel
    channel.send(`Hi ${member}, welcome to our Discord server! We are glad to have you here.`);
    // Optional: Send a direct message to the new member
    member.send({ embeds: [welcomeEmbed] });
  },
};