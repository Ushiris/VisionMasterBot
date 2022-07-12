const fs = require("fs");

/**
 * @description 収録弾のデータ。
 */
exports.packageData = {
    packageTypes : {
        normal : {
            name : "通常弾",
            prefix : "NO",
            indexFormat : (
                (name, index) => `${name} (第${index}弾)`
            )
        },
        sc : {
            name : "Special Collection",
            prefix : "SC",
            indexFormat : (
                (name, index) => `Special Collection Vol.${index}`
            )
        },
        am : {
            name : "Arcane Magic",
            prefix : "AM",
            indexFormat : (
                (name, index) => `Arcane Magic Vol.${index}`
            )
        },
        sterter : {
            name : "スターター",
            prefix : "ST",
            indexFormat : (
                (name, index) => `${name}`
            )
        },
        resall : {
            name : "再録弾",
            prefix : "RE",
            indexFormat : (
                (name, index) => `${name}`
            )
        },
        winner : {
            name : "大会プロモ等",
            prefix : "WI",
            indexFormat : (
                (name, index) => `大会等`
            )
        },
        test : {
            name : "テスト用データ",
            prefix : "TE",
            indexFormat : (
                (name, index) => `テスト用`
            )
        }
    },
    packages : {
        NO1  : { name : "基本セット", index : 1,  type : "normal" },
        NO2  : { name : "紅魔の睥睨", index : 2,  type : "normal" },
        NO3  : { name : "洩矢の王国", index : 3,  type : "normal" },
        NO4  : { name : "幻想の四季", index : 4,  type : "normal" },
        NO5  : { name : "神霊の劫火", index : 5,  type : "normal" },
        NO6  : { name : "悠久の月明", index : 6,  type : "normal" },
        NO7  : { name : "魔界の幻船", index : 7,  type : "normal" },
        NO8  : { name : "死霊の復活", index : 8,  type : "normal" },
        NO9  : { name : "天空の覇者", index : 9,  type : "normal" },
        NO10 : { name : "霊峰の魔獣", index : 10, type : "normal" },
        NO11 : { name : "Starlight Glory",     index : 11, type : "normal" },
        NO12 : { name : "Mind Revelation",     index : 12, type : "normal" },
        NO13 : { name : "Cosmic Dimension",    index : 13, type : "normal" },
        NO14 : { name : "Elemental Ritual",    index : 14, type : "normal" },
        NO15 : { name : "Vengeful Pygmy",      index : 15, type : "normal" },
        NO16 : { name : "Intangible Creature", index : 16, type : "normal" },
        NO17 : { name : "Bewitching Fairy",    index : 17, type : "normal" },
        NO18 : { name : "Fatal Strike",        index : 18, type : "normal" },
        NO19 : { name : "Horrible Invasion",   index : 19, type : "normal" },
        NO20 : { name : "Justice Force",       index : 20, type : "normal" },
    
        SC1  : { name : "Special Collection", index : 1,  type : "sc" },
        SC2  : { name : "Special Collection", index : 2,  type : "sc" },
        SC3  : { name : "Special Collection", index : 3,  type : "sc" },
        SC4  : { name : "Special Collection", index : 4,  type : "sc" },
        SC5  : { name : "Special Collection", index : 5,  type : "sc" },
        SC6  : { name : "Special Collection", index : 6,  type : "sc" },
        SC7  : { name : "Special Collection", index : 7,  type : "sc" },
        SC8  : { name : "Special Collection", index : 8,  type : "sc" },
        SC9  : { name : "Special Collection", index : 9,  type : "sc" },
        SC10 : { name : "Special Collection", index : 10, type : "sc" },
        SC11 : { name : "Special Collection", index : 11, type : "sc" },
        SC12 : { name : "Special Collection", index : 12, type : "sc" },
        SC13 : { name : "Special Collection", index : 13, type : "sc" },
        SC14 : { name : "Special Collection", index : 14, type : "sc" },
    
        AM1  : { name : "Arcane Magic", index : 1, type : "am" },
        AM2  : { name : "Arcane Magic", index : 2, type : "am" },
        AM3  : { name : "Arcane Magic", index : 3, type : "am" },
        AM4  : { name : "Arcane Magic", index : 4, type : "am" },
        AM5  : { name : "Arcane Magic", index : 5, type : "am" },
        AM6  : { name : "Arcane Magic", index : 6, type : "am" },
    
        ST1  : { name : "スターターデッキ地", index : 1,  type : "sterter" },
        ST2  : { name : "スターターデッキ星", index : 2,  type : "sterter" },
        ST3  : { name : "スターターデッキ紅", index : 3,  type : "sterter" },
        ST4  : { name : "スターターデッキ妖", index : 4,  type : "sterter" },
        ST5  : { name : "スターターデッキ風", index : 5,  type : "sterter" },
        ST6  : { name : "スターターデッキ神", index : 6,  type : "sterter" },
        ST7  : { name : "スターターデッキ永", index : 7,  type : "sterter" },
        ST8  : { name : "スターターデッキ輝", index : 8,  type : "sterter" },
        ST9  : { name : "スターターデッキ緋", index : 9,  type : "sterter" },
        ST10 : { name : "スターターデッキ怪", index : 10, type : "sterter" },
    
        RE1  : { name : "Power Of Union",      index : 1,  type : "resall" },
        RE2  : { name : "Revision Package",    index : 2,  type : "resall" },
        RE3  : { name : "Dark Night Illusion", index : 3,  type : "resall" },
        RE4  : { name : "Based Starter",       index : 4,  type : "resall" },
        RE5  : { name : "Advanced Starter",    index : 5,  type : "resall" },
        RE6  : { name : "Tactical Starter",    index : 6,  type : "resall" },
        RE7  : { name : "The Next Advance",    index : 7,  type : "resall" },
        RE8  : { name : "Optimal Starter",     index : 8,  type : "resall" },
        RE9  : { name : "Great Bellwether",    index : 9,  type : "resall" },
        RE10 : { name : "Liberal Emotion",     index : 10, type : "resall" },
        RE11 : { name : "Worthy Cause",        index : 11, type : "resall" },
        RE12 : { name : "Ultimate Magic",      index : 12, type : "resall" },
        RE13 : { name : "Keen Sense",          index : 13, type : "resall" },
    
        WI1 : { name : "大会等", index : 1, type : "winner" },
    
        TE1 : { name : "テスト", index : 1, type : "test" }
    }
}

/**
 * @description テキストの短縮表現。上にあるものから順に変換される。
 */
const zipTextRule = [
    /この効果は１ターンに１度しか使用出来ない。/g,"(ターン1制限)",
    /この効果は１ターンに１度しか使用できない。/g,"(ターン1制限)",
    /「/g,"｢",
    /」/g,"｣",
    /（人気爆発）/g,"(人気爆発)",
    /　（人気者ボーナス）/g,"(人気者ﾎﾞｰﾅｽ)",
    /　（通常時）/g,"(通常時)",
    /　（不人気ペナルティ）/g,"(不人気ﾍﾟﾅﾙﾃｨ)",
    /（/g,"(",
    /）/g,")",
    /【/g,"**【",
    /】/g,"】**",
    /ディスカード/g,"ﾃﾞｨｽｶｰﾄﾞ",
    /メンテナンス/g,"ﾒﾝﾃﾅﾝｽ",
    /メイン/g,"ﾒｲﾝ",
    /ドロー/g,"ﾄﾞﾛｰ",
    /アクティブ/g,"ｱｸﾃｨﾌﾞ",
    /フェイズ/g,"ﾌｪｲｽﾞ",
    /キャラクター/g,"ｷｬﾗ",
    /スペル/g,"ｽﾍﾟﾙ",
    /コマンド/g,"ｺﾏﾝﾄﾞ",
    /カード/g,"ｶｰﾄﾞ",
    /戦闘修正：/g,"",
    /相手プレイヤー/g,"相手",
    /プレイヤー/g,"ﾌﾟﾚｲﾔｰ",
    /デッキ/g,"ﾃﾞｯｷ",
    /全ての/g,"全",
    /セット/g,"ｾｯﾄ",
    /アクティブ/g,"ｱｸﾃｨﾌﾞ",
    /スリープ/g,"ｽﾘｰﾌﾟ",
    /シャッフル/g,"ｼｬｯﾌﾙ",
    /／/g,"/",
    /ダメージ/g,"ﾀﾞﾒｰｼﾞ",
    /ノード/g,"ﾉｰﾄﾞ",
    /コスト/g,"ｺｽﾄ",
    /プレイ/g,"ﾌﾟﾚｲ",
    /ライフポイント/g,"ﾗｲﾌ",
    /ターン/g,"ﾀｰﾝ",
    /Ｘ/g,"X",
    /１/g,"1",
    /２/g,"2",
    /３/g,"3",
    /４/g,"4",
    /５/g,"5",
    /６/g,"6",
    /７/g,"7",
    /８/g,"8",
    /９/g,"9",
    /０/g,"0",
    /－/g,"-",
    /＋/g,"+"
];

exports.getPackageName = function(packageID){
    if(!packageID) return "";

    var pack = exports.packageData.packages[packageID];

    return exports.packageData.packageTypes[pack.type].indexFormat(pack.name, pack.index);
}

/**
 * @description 全てのカードデータをObject形式で取得します
 * @returns Object カードデータ
 */
exports.getAllCardData = function () {
    return JSON.parse(fs.readFileSync("./data/cardList.json"));
}

/**
 * @description カード区分の表記ゆれを補正します 
 * @param {String} str 補正を行いたい文字列
 * @returns string E|S|P|N
 */
exports.convartPrefix = function(str){
    switch (str) {
        case "P"  :
        case "p"  :
        case "pr" :
        case "Pr" :
        case "プロモ":
        case "PR" : return "P";

        case "n"  :
        case "N"  :
        case "no" :
        case "No" :
        case "ナンバー":
        case "NO" : return "N";

        default   : return "E";
    }
}

/**
 * @description 一枚のカードの情報を検索し、Objectとして返却します。
 * @param {String} prefix NoとかPRとか
 * @param {number} no カードのナンバー
 * @returns Object cardData
 */
exports.getCardData = function (prefix, no) {
    var data = exports.getAllCardData();
    var id = exports.convartPrefix(prefix) + no.toString();

    return data[id];
}

/**
 * @description 条件を指定してカードを検索します。
 * @param {Object} idealCard {name:"幽々子", node:5}みたいな形式のデータ
 * @returns Array<Object> cardData
 */
exports.searchCardList = function (idealCard) {
    var data = exports.getAllCardData();
    var cardKeys = Object.keys(data);
    var searchProps = Object.keys(idealCard);

    var hitCards = new Array();
    var count = 0;
    cardKeys.forEach(id => {
        var hitCount = 0;
        var card = data[id];

        searchProps.forEach(prop => {
            if(prop == "package"){ // case of package
                card[prop].forEach(packID => {
                    if(packID == idealCard[prop]){
                        hitCount++;
                    }
                });
            }else if(isNaN(parseInt(card[prop]))){ // case of string property
                if(parseInt(card[prop]) == parseInt(card[prop]))console.log(parseInt(card[prop]));
                if(card[prop].indexOf(idealCard[prop]) != -1){
                    hitCount++;
                }
            } else { // case of number property
                console.log(parseInt(card[prop])); 
                if(parseInt(card[prop]) == parseInt(idealCard[prop])){
                    hitCount++;
                }
            }
        });

        if(hitCount === searchProps.length){
            hitCards[count] = card;
            count++;
        }
    });

    return hitCards[0] == null ? null : hitCards;
}

/**
 * @description Object形式のカードをDiscord向けの文字列に変換する
 * @param {Object} card カードのデータ。複数でもOK
 * @returns String discordに表示する用の文字列
 */
exports.cardFormat = function(card, mode){
    var result = "";
    var crlf = "\n";

    if (Array.isArray(card)){
        if(card.length == 1){
            return exports.cardFormat(card[0], mode);
        }
        card.forEach(item => {
            result += `${item.prefix}${item.no} ${item.name}${crlf}`;
        });
    } else {
        result = 
            `>>> ${card.prefix}` + `${card.no}` + crlf
            + `${card.name}` + crlf
            + `${card.type} `
                + ` N${card.node ?? '-'} C${card.cost ?? '-'}`
                + (card.attack ? ` ${card.attack}/${card.toughness}` : ``)
                + (card.graze ? ` GRAZE${card.graze}` : ``) + crlf
            + ((card.skill ? `${card.skill}` : ``) 
                +(card.upkeep ? `維持コスト:${card.upkeep}` : ``)
                + ((card.skill || card.upkeep) ? crlf  : ``))
            + (mode != "all" ? exports.zipText(card.ability) : card.ability)
            + (card.package[0] ? (crlf + "収録弾:" + exports.getPackageName(card.package[0], (mode != "all"))) : "")
        ;
        result = result.replace(/\-\/\-/g, "").replace(/GRAZE\-/g, "").replace(/　/g, " ");
    }

    return result;
}

/**
 * @description Visionのカードテキストを短縮します
 * @param {String} abilityStr 
 * @returns String 短縮された文字列
 */
exports.zipText = function(abilityStr){
    var newText = abilityStr;

    for (var i = 0; i < zipTextRule.length / 2; i++) {
      newText = newText.replace(zipTextRule[2 * i], zipTextRule[2 * i + 1]);
    }

    return newText;
}

exports.getCardAmount = function(prefix){
    var keys = Object.keys(exports.getAllCardData());
    var count = 0;
    keys.forEach(id => {
        if(id.startsWith(prefix)){
            count++;
        }
    });

    return count;

}

exports.getNormalPackageID = function(num){
    var packageIDs = Object.keys(exports.packageData.packages);

    var result = "NONE";
    packageIDs.forEach(id => {
        if(parseInt(id.replace(/NO/g, "")) == parseInt(num)){
            result = id;
        }
    });

    return result;
}