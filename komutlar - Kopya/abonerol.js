let database = require("wio.db")
const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)

if (args[0] === 'sıfırla') {
let kanal = database.fetch(`abonerol.${message.guild.id}`)  
  if (!kanal) return message.channel.send(`:white_small_square: Abone Rolü Yok!`)
  message.channel.send(`:white_small_square: Abone Rolü Silindi!`)
database.delete(`abonerol.${message.guild.id}`)
  return;
}




  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: '!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}