const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: 'stop',
  description: 'Stops the music and leaves the voice channel',
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stops the music and leaves the voice channel'),
  async execute(interaction, client) {
    const connection = client.voice?.connection;

    if (!connection) {
      return interaction.reply('I am not in a voice channel!');
    }

    connection.destroy();
    await interaction.reply('Stopped the music and left the voice channel!');
  },
};