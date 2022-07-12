const dataIO = require("../data/interface.js");

const {
  entersState,
  AudioPlayerStatus,
  createAudioPlayer,
  joinVoiceChannel
} = require('@discordjs/voice');

exports.name = "bgm";

exports.description = "bgmを流します";

exports.options = [];

exports.run = async function (args, message) {
  if (!dataIO.isPremiumGuild(message.guild.id)) return;

  // コマンドを実行したメンバーがいるボイスチャンネルを取得
  const channel = message.member.voice.channel;

  // コマンドを実行したメンバーがボイスチャンネルに入ってなければ処理を止める
  if (!channel) return message.reply('先にボイスチャンネルに参加してください！');

  // チャンネルに参加
  const connection = joinVoiceChannel({
    adapterCreator: channel.guild.voiceAdapterCreator,
    channelId: channel.id,
    guildId: channel.guild.id,
    selfDeaf: false,
    selfMute: false,
  });
  const player = createAudioPlayer();
  connection.subscribe(player);

  //player.play(createAudioResource("./bgm/01"));

  await entersState(player, AudioPlayerStatus.Playing, 10 * 1000);
  await entersState(player, AudioPlayerStatus.Idle, 24 * 60 * 60 * 1000);
  // 再生が終了したら抜ける
  connection.destroy();
}