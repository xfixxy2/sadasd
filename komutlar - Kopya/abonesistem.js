const discord = require("discord.js");
const { prefix } = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail(bot.user.avatarURL)
    .setTitle(`:white_small_square: ${bot.user.username} Abone Sistem Menüsü`)
    .addField(`:white_small_square: ${prefix}aboneysay`, "Abone Yetkililerin Kaç Kisi Abone verdigini gösterir")
    .addField(
      `:white_small_square: ${prefix}abone`,
      "Belirtilen Kisiye ayarlanmıs abone rolünü verir !"
    )
    .addField(`:white_small_square: ${prefix}abone-yetkili-rol @rol`, "Üyeye Abone Rolü Vercek Yetkili Rolünü Ayarlar!")
    .addField(`:white_small_square: ${prefix}abone-yetkili-rol sıfırla`, "Üyeye Abone Rolü Vercek Yetkili Rolünü Sıfırlar!")
    .addField(`:white_small_square: ${prefix}abonerol @rol`, "Üyeye Verilcek Abone Rolünü Ayarlar!")
	    .addField(`:white_small_square: ${prefix}abonerol sıfırla`, "Üyeye Verilcek Abone Rolünü Sıfırlar!")
  	

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abonesistemleri","abone-sistem","abonesistem","abonesistemi"],
  PermLevel: 0
};

exports.help = {
  name: "abone-sistemi",
  description: "Bot Yardım Menüsü",
  usage: "yardım"
};
