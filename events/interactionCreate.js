/**
 * Event: interactionCreate
 * Triggered when a user interacts with a slash command or button.
 */
module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    // Check if command exists
    if (!command) {
      return interaction.reply({
        content: '❌ Command not recognized!',
        ephemeral: true, // Only visible to the user
      });
    }

    // Execute the command
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: '❌ An error occurred while executing this command.',
        ephemeral: true,
      });
    }
  },
};
