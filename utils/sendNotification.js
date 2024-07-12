// utils/sendNotification.js
const { Client, GatewayIntentBits } = require('discord.js');
const { discordChannelId } = require('./../config/bot.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', async () => {
    console.log('Bot is ready to send notifications.');
});

const sendNotification = async (title, url) => {
    try {
        if (!client.isReady()) {
            await client.login(process.env.DISCORD_TOKEN);
        }
        
        const channel = client.channels.cache.get(discordChannelId);
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
