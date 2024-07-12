module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
    execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('You do not have permissions to use this command.');
        const member = message.mentions.members.first();
        if (!member) return message.reply('Please mention a valid member of this server');
        if (!member.bannable) return message.reply('I cannot ban this user! Do they have a higher role? Do I have ban permissions?');

        member.ban({ reason: args.slice(1).join(' ') }).then(() => {
            message.reply(`${member.user.tag} has been banned`);
        }).catch(error => {
            message.reply(`Sorry, I couldn't ban because of : ${error}`);
        });
    },
};
