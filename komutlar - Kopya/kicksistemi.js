const discord = require("discord.js");
const db = require("wio.db");

exports.run = async (client, message, args) => {
      return message.channel.send(
        new discord.MessageEmbed()
          .setTitle(`${client.user.username} Yardım Menüsü`)
          .setColor("PURPLE").setDescription(`
v!kick | BİRİSİNİ Kickler
v!kick-yetkili-rol | Kick YETKİLİ ROLÜNÜ AYARLAR
v!kick-yetkili-rol sıfırla | Kick YETKİLİ ROLÜ SIFIRLAR
v!kick-log <#kanal> | BİRİSİ Kicklenince LOG NEREYE GİDİCENİ BELİRTİR
v!kick-log sıfırla | BİRİSİ Kicklenince LOG NEREYE GİDİCENİ SIFIRLAR
`)
      );
}
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["kick-sistem","kicksistem"],

  permLevel: 0

};

exports.help = {

  name: 'kicksistem',

  description: "Darknes Code",

  usage: 'gif-ara'

};