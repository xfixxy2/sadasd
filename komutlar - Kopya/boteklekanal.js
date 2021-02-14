const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'kapat') {
let rol = db.fetch(`hgK3_${message.guild.id}`)  
  if (!rol) return message.channel.send(` Bot ekleme  Kanalı Ayarlanmamış!`)
  message.channel.send(`Botekleme  Kanalı Sıfırlandı!`)
db.delete(`hgK3_${message.guild.id}`)
  return;
}
  

let kinal = db.fetch(`hgK3_${message.guild.id}`)
if(db.has(`hgK3_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Botekleme  kanalı <#${kinal}> kanalına ayarlı! \nKapatmak için** \`${ayarlar.prefix}botekle-log kanal kapat\``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**Botekleme Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}botekle-log-kanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`hgK3_${message.guild.id}`, kanal.id);
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**Botekleme kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
}; // VİCTORY DEVELOPMENT
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["botekle-kanal"],
permLevel: 0
};
exports.help = {
name: 'botekle-log-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};// Bu altyapı xFixxy Aittir