const request = require("request");
const fs = require("fs");

exports.updatePublicIP = function(){
    var options = {
        url: 'https://api64.ipify.org?format=json',
        method: 'GET'
    }

    request(options, function (error, response, body) {
        var newIP = JSON.parse(body).ip;
        if(JSON.parse(fs.readFileSync("./data/network.json")).ip == newIP) return;

        fs.writeFileSync("./data/network.json", body);
        console.log("ip updated! new ip is " + newIP);
    });
}