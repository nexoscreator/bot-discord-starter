const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Get bot ping!'),
  async execute(interaction) {
    await interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
  },
};