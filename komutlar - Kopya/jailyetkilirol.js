const discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu Komudu Kullanabilmen İçin \`Yönetici\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`jailyetkilirol_${message.guild.id}`)  
  if (!rol) return message.channel.send(` Jail Yetkili Rolü Ayarlanmamış!`)
  message.channel.send(` Jail Yetkili Rolü Sıfırlandı!`)
db.delete(`jailyetkilirol_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(` Ayarlayacağınız Jail Yetkili Rolü Belirtiniz!`)

db.set(`jailyetkilirol_${message.guild.id}`, rol.id)

message.channel.send(` Jail Yetkili Rolü ${rol} Olarak Ayarlandı!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'jail-yetkili-rol'
}