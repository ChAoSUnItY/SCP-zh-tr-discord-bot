const {RichEmbed} = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;

    let botembed = new RichEmbed()
    .setTitle("繁中分部機器人指令一覽")
    .setDescription("版本：1.1.0")
    .setColor("#660000")
    .addField("直連", "&link <尾網址> <(繁中則免)/cn/en/int>")
    .addField("站內搜尋", "&search <字串> <(繁中則免)/cn/en/int>")
    .addField("最新作品", "&news")
    .addField("骰子", "&rd XdY")
    .addField("舉報", "&report <@username> <理由>    [請勿濫用]")
    .addField("機器人簡介", "&botinfo")
    .addField("SCP快速連結", "&scp <(分部)-項目編號>")
    .addField("臭蟲回報", "&bug <指令> <敘述>")
    .addField("計時器", "&timer <XX:XX:XX.XXX/XhXmXs> (<自訂提醒訊息>)")
    .setFooter("Powered by SCP ZH-TR Discord Branch", "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}