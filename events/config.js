// events/config.js
const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  execute(client) {

    // Set username
    // client.user.setUsername('Nexos Creator')
    // 	.then(user => console.log(`My new username is ${user.username}`))
    // 	.catch(console.error);

    // Set streaming activity with URL
    client.user.setActivity('Streaming', { type: 'STREAMING', url: 'https://www.youtube.com/nexoscreator' });
  },
};