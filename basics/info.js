/**
 * Command: info
 * Description: Provides information about the bot.
 */
module.exports = {
    name: 'info',
    description: 'Displays bot information.',
  
    execute(message) {
      const { client } = message;
      const infoMessage = `
        🤖 **Bot Information**:
        - Name: ${client.user.tag}
        - Servers: ${client.guilds.cache.size}
        - Users: ${client.users.cache.size}
        - Created: ${client.user.createdAt.toDateString()}
      `;
  
      try {
        message.reply(infoMessage);
      } catch (error) {
        console.error('❌ Error executing info command:', error);
        message.reply('An error occurred while fetching bot information.');
      }
    },
  };
  