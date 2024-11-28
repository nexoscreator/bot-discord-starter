const { SlashCommandBuilder } = require('discord.js');

/**
 * Command: info
 * Description: Provides bot information.
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Displays bot information'),

  async execute(interaction) {
    try {
      const { client } = interaction;
      const infoMessage = `
        🤖 **Bot Information**:
        - Name: ${client.user.tag}
        - Servers: ${client.guilds.cache.size}
        - Users: ${client.users.cache.size}
        - Created: ${client.user.createdAt.toDateString()}
      `;

      await interaction.reply({ content: infoMessage, ephemeral: true });
    } catch (error) {
      console.error('❌ Error executing info command:', error);
      await interaction.reply({
        content: 'An error occurred while fetching bot information.',
        ephemeral: true,
      });
    }
  },
};
