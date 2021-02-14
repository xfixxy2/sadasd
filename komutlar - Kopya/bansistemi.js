const discord = require("discord.js");
const db = require("wio.db");

exports.run = async (client, message, args) => {
      return message.channel.send(
        new discord.MessageEmbed()
          .setTitle(`${client.user.username} Yardım Menüsü`)
          .setColor("PURPLE").setDescription(`
v!ban | BİRİSİNİ BANLAR
v!unban | BİRİSİNİN BANINI ACAR
v!ban-yetkili-rol | BAN YETKİLİ ROLÜNÜ AYARLAR
v!ban-yetkili-rol sıfırla | BAN YETKİLİ ROLÜ SIFIRLAR
v!ban-log <#kanal> | BİRİSİ BANLANINCA LOG NEREYE GİDİCENİ BELİRTİR
v!ban-log <#kanal> sıfırla | BİRİSİ BANLANINCA LOG NEREYE GİDİCENİ SIFIRLAR
`)
      );
}
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["ban-sistem","bansistem"],

  permLevel: 0

};

exports.help = {

  name: 'bansistem',

  description: "Darknes Code",

  usage: 'gif-ara'

};