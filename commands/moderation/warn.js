const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: 'warn',
  description: 'Warn a user',
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Warn a user')
    .addUserOption(option => option.setName('user').setDescription('The user to warn').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason for the warnning').setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason');
    await interaction.reply(`${user.tag} has been warned for: ${reason}`);
  },
};