const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async(client, message, args) => {
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

if (args[0] === 'sıfırla') {
        message.channel.send(`Kick yetkili rolü silindi`)
      db.delete(`kickrol_${message.guild.id}`)
        return;
      }
    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send('Bir rol etiketlemelisin (Eğer rolü bulamıyorsan kanalı görebildiğinden veya etkietlenebilir olduğundan emin ol)')
   db.set(`kickrol_${message.guild.id}`, rol.id)
   return message.channel.send('Kick yetkili rolü <@&' + rol+ '> Olarak ayarlandı')
} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "kick-yetkili-rol"
}