// events/ready.js
const cron = require('node-cron');
const fetchLatestVideo = require('../utils/fetchLatestVideo');
const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {

		// Set username
		// client.user.setUsername('Nexos Creator')
		// 	.then(user => console.log(`My new username is ${user.username}`))
		// 	.catch(console.error);

		// Set activity with error handling
		try {
			client.user.setActivity('with JavaScript', { type: 'PLAYING' });
			console.log('Activity set to playing with JavaScript');
		} catch (error) {
			console.error('Failed to set activity:', error);
		}

		// Set streaming activity with URL
		// client.user.setActivity('Streaming', { type: 'STREAMING', url: 'https://www.youtube.com/nexoscreator' });


		// Schedule task to run every 30 minutes
		cron.schedule('*/30 * * * *', fetchLatestVideo);

		// Initial fetch
		fetchLatestVideo();

		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};