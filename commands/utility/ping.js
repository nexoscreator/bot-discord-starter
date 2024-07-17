const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
