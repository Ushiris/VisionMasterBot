const discord = require("discord.js");
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });
const vm = require("./visionMaster.js");

client.on("ready", message => { client.user.setActivity("Phantom magic VISION", { type: "PLAYING" }); });

client.on("messageCreate", async message => {
  //botによるコマンドループを防ぎます
  if (message.author.bot) return;

  //コマンド引数の分割
  var inputs = message.content.split(/\s+/);

  //コマンドの実行
  if (vm.cmd.isCommand(inputs[0])) vm.cmd.runCommand(inputs, message);
});

client.login(require("./envioment.json").token);

setInterval(vm.network.updatePublicIP, 5 * 60 * 1000);


// 通信の詳細確認用。ログがかなり大量に流れるので基本的にはコメントアウト推奨。
// client.on("raw", async args =>{ console.log(args); });