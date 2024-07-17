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
        .setColor('#00f576')
        .setTitle('Help - List of Commands')
        .setURL("https://bot.nexoscreation.com")
        .setDescription('Here\'s a list of all my commands:')
        .addFields(
          { name: 'Commands', value: commands.map(command => `\`${command.name}\`: ${command.description}`).join('\n') },
          { name: 'Usage', value: `You can send \`${process.env.BOT_PREFIX}help [command name]\` to get info on a specific command!` }
        )
        .setFooter({ text: 'Nexos Creator', iconURL: 'https://nexoscreation.com/logo.png' })
        .setTimestamp();

      return message.channel.send({ embeds: [helpEmbed] });
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply('That\'s not a valid command!');
    }

    const commandEmbed = new EmbedBuilder()
      .setColor('#00f576')
      .setTitle(`Command: ${command.name}`)
      .setURL("https://bot.nexoscreation.com")
      .addFields(
        { name: 'Description', value: command.description || 'No description available.' },
        { name: 'Usage', value: `\`${process.env.BOT_PREFIX}${command.name} ${command.usage || ''}\`` }
      )
      .setFooter({ text: 'Nexos Creator', iconURL: 'https://nexoscreation.com/logo.png' })
      .setTimestamp();

    message.channel.send({ embeds: [commandEmbed] });
  },
};
