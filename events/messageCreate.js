const { Collection } = require('discord.js');

const cooldowns = new Collection();

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return;

        const limit = 5; // Maximum messages allowed
        const timeFrame = 10000; // Time frame in milliseconds (10 seconds)
        const userId = message.author.id;

        if (!cooldowns.has(userId)) {
            cooldowns.set(userId, []);
        }

        const userMessages = cooldowns.get(userId);
        userMessages.push(Date.now());

        const timeNow = Date.now();
        const recentMessages = userMessages.filter(timestamp => timeNow - timestamp < timeFrame);

        if (recentMessages.length > limit) {
            message.channel.bulkDelete(recentMessages.length).catch(console.error);
            message.channel.send(`${message.author}, you are sending messages too quickly! Please slow down.`);
            cooldowns.set(userId, []);
        } else {
            cooldowns.set(userId, recentMessages);
        }
    },
};
