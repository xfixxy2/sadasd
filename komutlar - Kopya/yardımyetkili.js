const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Victory Yenilik Komutları`)
.addField(`v!uptime`, "Uptime Sistemi Getirildi")
.addField(`v!eglence`,"Eglence Komutları Getirildi")
.setFooter(`Yenilik Menüsü`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["yenilik"], 
  permLevel: 0 
};

exports.help = {
  name: 'yenilikler',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};