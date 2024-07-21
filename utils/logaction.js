function logAction(action, targetUser, moderator, guild) {
  const logChannel = client.channels.cache.get(LOG_CHANNEL_ID);
  if (!logChannel) {
    console.error('Log channel not found.');
    return;
  }

  let actionMessage;
  switch (action) {
    case 'ban':
      actionMessage = `User ${targetUser.tag} has been banned by ${moderator.tag}.`;
      break;
    case 'kick':
      actionMessage = `User ${targetUser.tag} has been kicked by ${moderator.tag}.`;
      break;
    case 'warn':
      actionMessage = `User ${targetUser.tag} has been banned by ${moderator.tag}.`;
      break;
    case 'timeout':
      actionMessage = `User ${targetUser.tag} has been banned by ${moderator.tag}.`;
      break;
      // Add more cases for different actions
  }

  logChannel.send(actionMessage);
}