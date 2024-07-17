const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'timeout',
    description: 'Times out a user.',
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Times out a user')
        .addUserOption(option => option.setName('user').setDescription('The user to timeout').setRequired(true))
        .addIntegerOption(option => option.setName('duration').setDescription('The duration of the timeout in minutes').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for the timeout').setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const duration = interaction.options.getInteger('duration');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return interaction.reply('You do not have permission to timeout members.');
        }

        const member = interaction.guild.members.resolve(user);

        if (member) {
            try {
                await member.timeout(duration * 60 * 1000, reason);
                return interaction.reply(`${user.tag} has been timed out for ${duration} minutes for: ${reason}`);
            } catch (error) {
                console.error(error);
                return interaction.reply('Failed to timeout the member.');
            }
        } else {
            return interaction.reply('User not found.');
        }
    },
};
