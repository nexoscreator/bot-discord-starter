/**
 * Slash Command: ping
 * Description: Checks bot responsiveness and API latency.
 */
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Checks bot responsiveness and API latency.'),

  async execute(interaction) {
    try {
      const start = Date.now(); // Start timing

      await interaction.reply('🏓 Pinging...'); // Initial response
      const latency = Date.now() - start; // Calculate latency
      const apiLatency = Math.round(interaction.client.ws.ping); // API latency

      // Edit the reply with the latency values
      await interaction.editReply(`🏓 Pong! Latency: ${latency}ms | API Latency: ${apiLatency}ms`);
    } catch (error) {
      console.error('❌ Error executing ping command:', error);
      await interaction.reply({
        content: 'An error occurred while trying to calculate latency.',
        ephemeral: true,
      });
    }
  },
};
