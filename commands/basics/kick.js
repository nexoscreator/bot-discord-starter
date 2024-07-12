module.exports = {
    name: 'kick',
    description: 'Kick a user from the server',
    execute(message, args) {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('You do not have permissions to use this command.');
        const member = message.mentions.members.first();
        if (!member) return message.reply('Please mention a valid member of this server');
        if (!member.kickable) return message.reply('I cannot kick this user! Do they have a higher role? Do I have kick permissions?');

        member.kick().then(() => {
            message.reply(`${member.user.tag} has been kicked`);
        }).catch(error => {
            message.reply(`Sorry, I couldn't kick because of : ${error}`);
        });
    },
};
