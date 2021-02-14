const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async(client, message, args) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

if (args[0] === 'sıfırla') {
      message.channel.send(`Kicklog kanalı silindi`)
    db.delete(`kicklog_${message.guild.id}`)
      return;
    }
       let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('Kick log kanalını belirtmelisin')

    db.set(`kicklog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`Kick log kanalı <#${kanal.id}> Olarak ayarlandı!`)
  
 }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 4
};

exports.help = {
    name: "kick-log"
}