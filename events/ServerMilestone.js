const { announceChannelId } = require('./../config/bot.json');

module.exports = {
  name: 'servermilestone',
  execute(member) {
    const memberCount = member.guild.memberCount;
    const channel = member.guild.channels.cache.get(announceChannelId);
    if (!channel) return;

    if (memberCount === 100 || memberCount === 500 || memberCount === 1000) {
      const milestoneMessage = `
            🎉 Hooray! We've just reached ${memberCount} members! 
            
            🎉Thank you all for being a part of this amazing community. Let's continue to grow and have fun together!
        `;

      channel.send(milestoneMessage);
    }
  },
};