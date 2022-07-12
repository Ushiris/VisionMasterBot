const fs = require("fs");

exports.isPremiumGuild = function(guildID){
    return JSON.parse(fs.readFileSync("./data/premiumUser.json")).guildList.includes(guildID);
}

exports.getPublicIP = function(){
    return JSON.parse(fs.readFileSync("./data/network.json")).ip;
}