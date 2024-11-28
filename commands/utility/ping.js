const { SlashCommandBuilder } = require('discord.js');

/**
 * Command: ping
 * Description: Checks bot responsiveness and API latency.
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Checks bot responsiveness'),

  async execute(interaction) {
    try {
      const sent = await interaction.reply({ content: '🏓 Pinging...', fetchReply: true });
      const latency = sent.createdTimestamp - interaction.createdTimestamp;
      const apiLatency = Math.round(interaction.client.ws.ping);

      await interaction.editReply(
        `🏓 Pong! Latency: ${latency}ms | API Latency: ${apiLatency}ms`
      );
    } catch (error) {
      console.error('❌ Error executing ping command:', error);
      await interaction.reply({
        content: 'An error occurred while calculating latency. Please try again later.',
        ephemeral: true,
      });
    }
  },
};
