const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('**Log kanalını ayarlamak için `Yönetici` İznine sahip olmalısın!')
return message.channel.send(embed)
}


if (args[0] === 'sıfırla') {
let rol = db.fetch(`log_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: Mod Log Kanalı Yok!`)
  message.channel.send(`:white_small_square: Mod Log Silindi!`)
db.delete(`log_${message.guild.id}`)
  return;
}

let kinal = db.fetch(`log_${message.guild.id}`)
if(db.has(`log_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Mod Log kanalı <#${kinal}> Kanalına Ayarlı! \n Kapatmak için** \`${ayarlar.prefix}modlog sıfırla Yazınız. \``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`** Mod Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}modlog #kanal\`**`)
return message.channel.send(embed)
}
db.set(`log_${message.guild.id}`, kanal.id);
 //youtube.com/Ardééks
// Teşekkürler xFixxy
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`** Mod Log Kanalını ${kanal} Olarak Ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['mod-log','modlog'],
permLevel: 0
};
exports.help = {
name: 'modlog',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};