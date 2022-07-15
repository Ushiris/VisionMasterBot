const logSystem = require("../data/interface.js");

exports.runCommand = async function (args, message) {
    var cmdName = args.shift().replace("/", "").replace("!", "");

    var cmd = null;
    try {
        cmd = require("./" + cmdName + ".js");
    } catch {
        message.reply(cmdName + " は存在しません。");
    }

    cmd.run(args, message);
    logSystem.writeLog(message.guild.id, message.guild.name, cmdName);
}

exports.isCommand = function (str) {
    try {
        cmd = require("./" + str.replace("/", "").replace("!", "") + ".js");
    } catch {
        return false;
    }

    return true;
}