const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici Yetkin Olması Lazım Kardesim")


if (args[0] === 'sıfırla') {
let rol = db.fetch(`jailrol_${message.guild.id}`) 
let kanal = db.fetch(`jailkanal_${message.guild.id}`)   
  if (!rol) return message.channel.send(`:white_small_square: Jail Sistemi Yok!`)
  if (!kanal) return message.channel.send(`:white_small_square: Jail Sistemi Yok!`)
  message.channel.send(`:white_small_square: Jail Sistemi Silindi!`)
db.delete(`jailrol_${message.guild.id}`)
db.delete(`jailkanal_${message.guild.id}`)
  return;
}


let kanal = message.mentions.channels.first() || args[0]
let rol = message.mentions.roles.first() || args[1]

if(!kanal) return message.reply(':x: Yanlış kullanım ! `v!jail-ayarla #kanal @rol`')
if(!rol) return message.reply(':x: Yanlış kullanım ! `v!jail-ayarla #kanal @rol`')


message.channel.send(':white_check_mark: Jail sistemi başarıyla aktif hale getirildi ! Jail Log kanalı '+kanal+', Jail e atılınca verilecek rol ise '+rol+' olarak ayarlandı !')
db.set(`jailrol_${message.guild.id}`, rol.id)
db.set(`jailkanal_${message.guild.id}`, kanal.id);
}
exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: ['jailayarla', 'jail-ayarla'],
  permLevel: 3
};

exports.help = {
  name: 'jail-ayarla',
  description: '',
  usage: ''
};