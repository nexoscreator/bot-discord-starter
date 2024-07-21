// utils/sendNotification.js
const { Client, GatewayIntentBits } = require('discord.js');
const { YOUTUBE_ID } = require('./../config/guilds.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', async () => {
  console.log('Bot is ready to send notifications.');
});

const sendNotification = async (title, url) => {
  try {
    if (!client.isReady()) {
      await client.login(process.env.DISCORD_TOKEN);
    }

    const channel = client.channels.cache.get(YOUTUBE_ID);
    if (channel) {
      await channel.send(`📢 New Video: **${title}**\nWatch now: ${url}`);
    } else {
      console.error('Channel not found');
    }
  } catch (error) {
    console.error('Error sending notification:', error);
  } finally {
    await client.destroy();
  }
};

module.exports = sendNotification;