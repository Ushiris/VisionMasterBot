exports.name = "vfes";

exports.description = "大会運営機能を使用します";

exports.options = [
    {
        name : "subCommand",
        mode : [
            {
                name : "make",
                description : "大会を作成します"
            },{
                name : "start",
                description : "大会を開催します"
            },{
                name : "join",
                description : "大会に参加します"
            },{
                name : "match",
                description : "試合を開始します"
            },{
                name : "config",
                description : "大会の設定を行います"
            }
        ]
    }
];

exports.run = async function (args, message) {

}