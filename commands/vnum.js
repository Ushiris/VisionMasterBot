const cardIO = require("../data/cardListIO.js");

exports.name = "vnum";

exports.description = "カードNo.でのカード検索を行います";

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
    }

];

exports.run = async function (args, message) {
    var isZip = args[0] == "all" ? args.shift() : "";
    var prefix = cardIO.convartPrefix(args[0]) == "E" ? "N" : cardIO.convartPrefix(args.shift());
    var no = args.shift();

    var card = cardIO.getCardData(prefix, no);

    message.reply(card ? cardIO.cardFormat(card, isZip) : "カードが見つかりませんでした");
}