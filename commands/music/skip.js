const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    name: 'skip',
    description: 'Skip the currently playing song.',
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skips the currently playing song'),
    async execute(interaction, client) {
        const connection = client.voice?.connection;

        if (!connection) {
            return interaction.reply('I am not in a voice channel!');
        }

        const player = connection.player;
        if (player) {
            player.stop();
            await interaction.reply('Skipped the song!');
        } else {
            await interaction.reply('No music is playing!');
        }
    },
};
