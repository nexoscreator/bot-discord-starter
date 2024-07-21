const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
  name: 'play',
  description: 'Plays a song from YouTube',
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays a song from YouTube')
    .addStringOption(option => option.setName('url').setDescription('The URL of the YouTube video').setRequired(true)),
  async execute(interaction, client) {
    const url = interaction.options.getString('url');
    const voiceChannel = interaction.member.voice.channel;

    if (!voiceChannel) {
      return interaction.reply('You need to be in a voice channel to play music!');
    }

    const permissions = voiceChannel.permissionsFor(interaction.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return interaction.reply('I need the permissions to join and speak in your voice channel!');
    }

    try {
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
      });

      const stream = ytdl(url, { filter: 'audioonly' });
      const resource = createAudioResource(stream);
      const player = createAudioPlayer();

      player.play(resource);
      connection.subscribe(player);

      player.on(AudioPlayerStatus.Idle, () => {
        connection.destroy();
      });

      await interaction.reply(`Now playing: ${url}`);
    } catch (error) {
      console.error(error);
      await interaction.reply('There was an error trying to connect to the voice channel or play the audio.');
    }
  },
};