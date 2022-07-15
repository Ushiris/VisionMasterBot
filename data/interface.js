const fs = require("fs");

exports.isPremiumGuild = function(guildID){
    return JSON.parse(fs.readFileSync("./data/premiumUser.json")).guildList.includes(guildID);
}

exports.getPublicIP = function(){
    return JSON.parse(fs.readFileSync("./data/network.json")).ip;
}

exports.writeLog = function(guildID, guildName, commandName){
    var log = JSON.parse(fs.readFileSync("./data/commandLog.json"));
    log.log.push({guildID, guildName, commandName});

    var text = JSON.stringify(log, null, 2);
    fs.writeFileSync("./data/commandLog.json", text);
}

exports.readLog = function(){
    return JSON.parse(fs.readFileSync("./data/commandLog.json"));
}