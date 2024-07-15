const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const { MuteRoleID } = require('./../../config/bot.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mutes a user')
        .addUserOption(option => option.setName('user').setDescription('The user to mute').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for the mute').setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return interaction.reply('You do not have permission to mute members.');
        }

        const member = interaction.guild.members.resolve(user);

        if (member) {
            try {
                const muteRole = interaction.guild.roles.cache.get(MuteRoleID);
                if (!muteRole) {
                    return interaction.reply('Mute role not found.');
                }
                await member.roles.add(muteRole, reason);
                return interaction.reply(`${user.tag} has been muted for: ${reason}`);
            } catch (error) {
                console.error(error);
                return interaction.reply('Failed to mute the member.');
            }
        } else {
            return interaction.reply('User not found.');
        }
    },
};
