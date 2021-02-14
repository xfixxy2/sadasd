const discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`botlistyetkilirol_${message.guild.id}`)  
  if (!rol) return message.channel.send(` Botlist Yetkili Rolü Ayarlanmamış!`)
  message.channel.send(`Botlist Yetkili Rolü Sıfırlandı!`)
db.delete(`botlistyetkilirol_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(` Ayarlayacağınız Botlist Yetkili Rolü Belirtiniz!`)

db.set(`botlistyetkilirol_${message.guild.id}`, rol.id)

message.channel.send(`Botlist Yetkili Rolü ${rol} Olarak Ayarlandı!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'botlist-yetkili-rol'
}