const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: 'resume',
  description: 'resume the currently paused song',
  data: new SlashCommandBuilder()
    .setName('resume')
    .setDescription('Resumes the currently paused song'),
  async execute(interaction, client) {
    const connection = client.voice?.connection;

    if (!connection) {
      return interaction.reply('I am not in a voice channel!');
    }

    const player = connection.player;
    if (player) {
      player.unpause();
      await interaction.reply('Resumed the music!');
    } else {
      await interaction.reply('No music is playing!');
    }
  },
};