const fs = require("fs");

exports.isPremiumGuild = function(guildID){
    return JSON.parse(fs.readFileSync("./data/premiumUser.json")).guildList.includes(guildID);
}