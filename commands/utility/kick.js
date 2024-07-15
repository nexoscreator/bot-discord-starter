const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the server')
        .addUserOption(option => option.setName('user').setDescription('The user to kick').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for the kick').setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
            return interaction.reply('You do not have permission to kick members.');
        }

        const member = interaction.guild.members.resolve(user);

        if (member) {
            try {
                await member.kick(reason);
                return interaction.reply(`${user.tag} has been kicked for: ${reason}`);
            } catch (error) {
                console.error(error);
                return interaction.reply('Failed to kick the member.');
            }
        } else {
            return interaction.reply('User not found.');
        }
    },
};
