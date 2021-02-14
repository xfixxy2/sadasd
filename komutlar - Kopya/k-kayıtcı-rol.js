const discord = require('discord.js')
const client = new discord.Client();
const db = require('wio.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setTitle(`${client.user.username} - Kayıtçı Rol Sıfırla `)
.setColor('BLACK')
.setDescription(` Sunucu İçin Ayarladığınız Kayıtçı Rol Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kayıtçı Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Ayarlayacağınız Kayıtçı Rolü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtçı Rol Ayarlandı `)
.setColor('BLACK')
.setDescription(` Kayıt Edecek Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
  
}
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'kayıt-yetkili',

  description: "Darknes Code",

  usage: 'gif-ara'
};