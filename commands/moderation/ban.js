const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Bans a user from the server',
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user from the server')
    .addUserOption(option => option.setName('user').setDescription('The user to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason for the ban').setRequired(false)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') || 'No reason provided';

    if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return interaction.reply('You do not have permission to ban members.');
    }

    const member = interaction.guild.members.resolve(user);

    if (member) {
      try {
        await member.ban({ reason });
        return interaction.reply(`${user.tag} has been banned for: ${reason}`);
      } catch (error) {
        console.error(error);
        return interaction.reply('Failed to ban the member.');
      }
    } else {
      return interaction.reply('User not found.');
    }
  },
};