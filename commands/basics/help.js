const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'List all commands or info about a specific command.',
  options: [
    {
      name: 'command',
      type: 'STRING',
      description: 'The command to get information about',
      required: false,
    },
  ],
  execute(message, args) {
    const { commands } = message.client;

    if (!args.length) {
      const helpEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Help - List of Commands')
        .setDescription('Here\'s a list of all my commands:')
        .addFields(
          { name: 'Commands', value: commands.map(command => `\`${command.name}\`: ${command.description}`).join('\n') },
          { name: 'Usage', value: `You can send \`${process.env.BOT_PREFIX}help [command name]\` to get info on a specific command!` }
        )
        .setFooter({ text: 'Bot Help Command', iconURL: 'https://i.imgur.com/wSTFkRM.png' });

      return message.channel.send({ embeds: [helpEmbed] });
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply('That\'s not a valid command!');
    }

    const commandEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`Command: ${command.name}`)
      .addFields(
        { name: 'Description', value: command.description || 'No description available.' },
        { name: 'Usage', value: `\`${process.env.BOT_PREFIX}${command.name} ${command.usage || ''}\`` }
      )
      .setFooter({ text: 'Nexos Creator', iconURL: 'https://i.imgur.com/wSTFkRM.png' });

    message.channel.send({ embeds: [commandEmbed] });
  },
};
