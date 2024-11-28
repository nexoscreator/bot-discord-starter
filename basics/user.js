/**
 * Command: user
 * Description: Displays user-specific details.
 */
module.exports = {
    name: 'user',
    description: 'Displays your user details.',
  
    execute(message) {
      const userInfo = `
        🙋 **User Information**:
        - Username: ${message.author.tag}
        - ID: ${message.author.id}
        - Joined Server: ${message.member?.joinedAt?.toDateString() || 'N/A'}
        - Account Created: ${message.author.createdAt.toDateString()}
      `;
  
      try {
        message.reply(userInfo);
      } catch (error) {
        console.error('❌ Error executing user command:', error);
        message.reply('An error occurred while fetching your user information.');
      }
    },
  };
  