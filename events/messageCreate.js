/**
 * Event: messageCreate
 * Triggered whenever a new message is created.
 */
module.exports = {
    name: 'messageCreate',
    execute(message) {
      // Ignore bot messages or messages without the bot prefix
      if (message.author.bot || !message.content.startsWith(process.env.BOT_PREFIX)) return;
  
      const args = message.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
  
      // Fetch the command from the bot's command collection
      const command = message.client.commands.get(commandName);
      if (!command) return;
  
      // Execute the command
      try {
        command.execute(message, args);
      } catch (error) {
        console.error(error);
        message.reply('❌ An error occurred while executing that command.');
      }
    },
  };
  