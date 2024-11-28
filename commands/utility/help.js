const { SlashCommandBuilder } = require('discord.js');

/**
 * Command: help
 * Description: Lists all available slash commands.
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Lists all available slash commands'),

  async execute(interaction) {
    try {
      const commands = interaction.client.commands.map(
        cmd => `\`/${cmd.data.name}\`: ${cmd.data.description}`
      );
      const helpMessage = `📜 **Available Commands**:\n\n${commands.join('\n')}`;

      await interaction.reply({ content: helpMessage, ephemeral: true });
    } catch (error) {
      console.error('❌ Error executing help command:', error);
      await interaction.reply({
        content: 'An error occurred while fetching the help list. Please try again later.',
        ephemeral: true,
      });
    }
  },
};
