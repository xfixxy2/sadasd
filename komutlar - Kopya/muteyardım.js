const discord = require("discord.js");
const db = require("wio.db");

exports.run = async (client, message, args) => {
      return message.channel.send(
        new discord.MessageEmbed()
          .setTitle(`${client.user.username} Yardım Menüsü`)
          .setColor("PURPLE").setDescription(`
v!mute-rol

MUTE ROLÜ AYARLAR

v!mute-rol sıfırla 

MUTE ROLÜ SIFIRLAR

v!mute 

 BİRİNİ KALICI SUSTURUR

v!mute-yetkili-rol 

MUTE YETKİLİ ROLÜ AYARLAR

v!mute-yetkili-rol sıfırla \n \n MUTE YETKİLİ ROLÜ SIFIRLAR
`)
      );
}
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["mute-sistem","mutesistem"],

  permLevel: 0

};

exports.help = {

  name: 'mutesistem',

  description: "Darknes Code",

  usage: 'gif-ara'

};