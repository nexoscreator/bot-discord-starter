// utils/fetchLatestVideo.js
const axios = require('axios');
const { youtubeApiKey, channelId } = require('./../config/bot.json');
const sendNotification = require('./sendNotification');

let lastVideoId = '';

const fetchLatestVideo = async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                channelId: channelId,
                maxResults: 1,
                order: 'date',
                type: 'video',
                key: youtubeApiKey,
            },
        });

        const video = response.data.items[0];
        if (!video) return;

        const videoId = video.id.videoId;
        if (videoId !== lastVideoId) {
            lastVideoId = videoId;
            const title = video.snippet.title;
            const url = `https://www.youtube.com/watch?v=${videoId}`;
            sendNotification(title, url);
        }
    } catch (error) {
        console.error('Error fetching latest video:', error);
    }
};

module.exports = fetchLatestVideo;
