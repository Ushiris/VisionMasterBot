const dataIO = require("../data/interface.js");

const ytdl = require('ytdl-core');
const {
  entersState,
  AudioPlayerStatus,
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
  StreamType
} = require('@discordjs/voice');

exports.name = "bgm";

exports.description = "bgmを流します";

exports.options = [];

exports.run = async function (args, message) {
  if (!dataIO.isPremiumGuild(message.guild.id)) return;

  // メッセージから動画URLだけを取り出す
  const url = args.shift();
  if (!ytdl.validateURL(url)) return message.reply(`${url}は処理できません。`);

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

  // 動画の音源を取得
  const stream = ytdl(ytdl.getURLVideoID(url), {
    filter: format => format.audioCodec === 'opus' && format.container === 'webm', //webm opus
    quality: 'highest',
    highWaterMark: 32 * 1024 * 1024, // https://github.com/fent/node-ytdl-core/issues/902
  });
  const resource = createAudioResource(stream, {
    inputType: StreamType.WebmOpus
  });

  // 再生
  player.play(resource);
  await entersState(player, AudioPlayerStatus.Playing, 10 * 1000);
  await entersState(player, AudioPlayerStatus.Idle, 24 * 60 * 60 * 1000);

  // 再生が終了したら抜ける
  connection.destroy();

}