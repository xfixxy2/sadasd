const Discord = require('discord.js');
const db = require('wio.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

if (args[0] === 'sıfırla') {
let rol = db.fetch(`banlog_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: Ban Log Kanalı Yok!`)
  message.channel.send(`:white_small_square: Ban Log Silindi!`)
db.delete(`banlog_${message.guild.id}`)
  return;
}
	
let kinal = db.fetch(`banlog_${message.guild.id}`)
if(db.has(`banlog_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Ban Log kanalı <#${kinal}> Kanalına Ayarlı! \n Kapatmak için** \`${ayarlar.prefix}ban-log sıfırla Yazınız. \``)
return message.channel.send(embed)
}

       let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('Ban log kanalını belirtmelisin')

    db.set(`banlog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`Ban log kanalı <#${kanal.id}> Olarak ayarlandı!`)
  
 }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "ban-log"
}