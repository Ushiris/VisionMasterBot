const cardIO = require("../data/cardListIO.js");

exports.name = "vname";

exports.description = "カード名称でカード検索を行います";

exports.options = [
    {
        name : "isZip",
        mode : [
            {
                name : "all",
                description : "全文を表示します"
            },{
                name : "short",
                description : "略語を使用した表示します"
            }
        ]
    },{
        name : "prefix",
        mode : [
            {
                name : "NO",
                description : "通常ナンバーから検索します"
            },{
                name : "PR",
                description : "プロモカードを検索します"
            }
        ]
    },{
        name : "package",
        mode : [
            {
                name : "(packageNO)",
                description : "収録弾を指定します。キャラクターの検索に使うと便利。"
            }
        ]
    }

];

exports.run = async function (args, message) {
    var isZip = args[0] == "all" ? args.shift() : "";
    var prefix = cardIO.convartPrefix(args[0]) == "E" ? "E" : cardIO.convartPrefix(args.shift());
    var package = cardIO.getNormalPackageID(args[0]);
    if(package != "NONE"){
        args.shift();
    }
    var name = args.shift();

    var options = {name : name};
    if(prefix != 'E'){
        options["prefix"] = prefix;
    }
    if(package != "NONE"){
        options["package"] = package;
    }

    var card = no ? cardIO.searchCardList(options) : null;

    message.reply(card ? cardIO.cardFormat(card, isZip) : "カードが見つかりませんでした");
}