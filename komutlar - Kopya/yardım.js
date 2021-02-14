const discord = require("discord.js");
const { prefix } = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail(bot.user.avatarURL)
    .setTitle(`:white_small_square: ${bot.user.username} Yardım Menüsü`)
    .addField(`:white_small_square: ${prefix}moderasyon`, "Moderasyon Komutları")
    .addField(`:white_small_square: ${prefix}sunucu-tema-sistem`, "Sunucu Tema Sistemini Gösterir")
    .addField(`:white_small_square: ${prefix}abonesistem`, "Abone Sistem Menüsünü Gösterir Coder Youtube sunucuları için")
    .addField(
      `:white_small_square: ${prefix}çekiliş`,
      "Çekiliş Komutlarını Gösterir (reroll start end v.b)"
    )
    .addField(`:white_small_square: ${prefix}kick-sistem`, "Kick Komutlarını Gösterir")
    .addField(`:white_small_square: ${prefix}ban-sistem`, "Ban Komutlarını Gösterir")
    .addField(`:white_small_square: ${prefix}gif-menü`, "Gif Menüsünü Açar")
	    .addField(`:white_small_square: ${prefix}jail-sistemi`, "Jail(Hapis) Komutları Gösterir")
	    .addField(`:white_small_square: ${prefix}mutesistem`, "Mute Sisteminin Komutlarını Gösterir")
	    .addField(`:white_small_square: ${prefix}botlist`, "Botlist Komutlarını gösterir kabulet reddet anında yapmaz sahipid ve bot id bulamıyor intent hatası")
		.addField(`:white_small_square: ${prefix}eglence`,"Eglence Komutları")
  	

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help","yardim"],
  PermLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Bot Yardım Menüsü",
  usage: "yardım"
};
