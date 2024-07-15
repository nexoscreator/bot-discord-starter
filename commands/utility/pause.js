const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pauses the currently playing song'),
    async execute(interaction, client) {
        const connection = client.voice?.connection;

        if (!connection) {
            return interaction.reply('I am not in a voice channel!');
        }

        const player = connection.player;
        if (player) {
            player.pause();
            await interaction.reply('Paused the music!');
        } else {
            await interaction.reply('No music is playing!');
        }
    },
};
