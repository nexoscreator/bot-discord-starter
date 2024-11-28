/**
 * Command: server
 * Description: Displays server details.
 */
module.exports = {
    name: 'server',
    description: 'Displays server information.',
  
    execute(message) {
      const { guild } = message;
      if (!guild) {
        return message.reply('This command can only be used in a server.');
      }
  
      const serverInfo = `
        🏠 **Server Information**:
        - Name: ${guild.name}
        - Members: ${guild.memberCount}
        - Created: ${guild.createdAt.toDateString()}
        - Owner: ${guild.owner?.user.tag || 'Unknown'}
      `;
  
      try {
        message.reply(serverInfo);
      } catch (error) {
        console.error('❌ Error executing server command:', error);
        message.reply('An error occurred while fetching server information.');
      }
    },
  };
  