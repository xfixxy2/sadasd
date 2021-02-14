let database = require("wio.db")
let ayarlar = require("../ayarlar.json")



exports.run = async (client, message, args) => {
	
if (args[0] === 'sıfırla') {
let kanal = database.fetch(`aboneyetkilisi.${message.guild.id}`)  
  if (!kanal) return message.channel.send(`:white_small_square: Abone Yetkili Rolü Ayarlanmamıs`)
  message.channel.send(`:white_small_square: Abone Yetkili Rolü Silindi!`)
database.delete(`aboneyetkilisi.${message.guild.id}`)
  return;
}	

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone-y-rol"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "abone-yetkili-rol",
  description: "Rol koruma",
  usage: "rol-koruma"
};