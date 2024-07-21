const Parser = require('rss-parser');

const rssParser = new Parser();

// Array of RSS feed URLs to monitor
const rssFeeds = [
    'https://example.com/feed/rss',
    'https://anotherwebsite.com/rss.xml'
];

async function checkFeeds() {
  try {
    for (const feedUrl of rssFeeds) {
      const feed = await rssParser.parseURL(feedUrl);
      if (feed && feed.items && feed.items.length > 0) {
        const latestItem = feed.items[0];
        const message = `**New Post on ${feed.title}**\n${latestItem.title}\n${latestItem.link}`;
        postToDiscord(message);
      }
    }
  } catch (error) {
    console.error('Error fetching or parsing RSS feed:', error.message);
  }
}

function postToDiscord(content) {
  const channel = client.channels.cache.get('your_channel_id_here'); // Replace with your channel ID
  if (channel) {
    channel.send(content);
  } else {
    console.error('Invalid channel ID or missing permissions');
  }
}