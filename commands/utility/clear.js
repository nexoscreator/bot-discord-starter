const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Clears a specified number of messages from the channel',
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clears a specified number of messages from the channel')
        .addIntegerOption(option => option.setName('amount').setDescription('The number of messages to clear').setRequired(true)),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
            return interaction.reply('You do not have permission to manage messages.');
        }

        if (amount < 1 || amount > 100) {
            return interaction.reply('You need to input a number between 1 and 100.');
        }

        await interaction.channel.bulkDelete(amount, true).catch(error => {
            console.error(error);
            interaction.reply('There was an error trying to clear messages in this channel!');
        });

        return interaction.reply(`Successfully cleared ${amount} messages.`);
    },
};
