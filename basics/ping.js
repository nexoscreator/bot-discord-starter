/**
 * Command: ping
 * Description: Checks bot responsiveness and API latency.
 */
module.exports = {
  name: 'ping', // Command name
  description: 'Checks bot responsiveness.',

  execute(message) {
    const start = Date.now();
    message.reply('🏓 Pinging...').then(sent => {
      const latency = Date.now() - start;
      const apiLatency = Math.round(message.client.ws.ping);

      sent.edit(`🏓 Pong! Latency: ${latency}ms | API Latency: ${apiLatency}ms`);
    }).catch(error => {
      console.error('❌ Error executing ping command:', error);
      message.reply('An error occurred while trying to calculate latency.');
    });
  },
};
