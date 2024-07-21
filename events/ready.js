// events/ready.js
const cron = require('node-cron');
const fetchLatestVideo = require('../utils/fetchLatestVideo');
const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {

    // Schedule task to run every 30 minutes
    cron.schedule('*/30 * * * *', fetchLatestVideo);

    // Initial fetch
    fetchLatestVideo();

    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};