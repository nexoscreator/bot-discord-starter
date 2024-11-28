/**
 * Command: help
 * Description: Lists all available commands.
 */
module.exports = {
  name: 'help', // Command name
  description: 'Lists all available commands.',

  execute(message, args) {
    const commands = message.client.commands.map(cmd => `\`${cmd.name}\`: ${cmd.description}`);
    const helpMessage = `📜 **Available Commands**:\n\n${commands.join('\n')}`;

    try {
      message.reply(helpMessage);
    } catch (error) {
      console.error('❌ Error executing help command:', error);
      message.reply('An error occurred while fetching the help list.');
    }
  },
};
