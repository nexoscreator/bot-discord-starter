module.exports = {
  name: 'ping',
  description: 'Ping!',
  async execute(message, args) {
    const sent = await message.channel.send('Pinging...');
    const ping = sent.createdTimestamp - message.createdTimestamp;
    const apiPing = Math.round(message.client.ws.ping);

    sent.edit(`Pong! Latency is ${ping}ms. API Latency is ${apiPing}ms.`);
  },
};