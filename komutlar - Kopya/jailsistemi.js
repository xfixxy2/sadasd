const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#000000')
      .setTitle('VICTORY - Jail Sistemi')
        .addField('**v!jail-ayarla**', 'Jail Sistemini Ayarlar !')
      .addField('**v!jail-ayarla sıfırla**', 'Jail Sistemini Sıfırlar')
    .addField('**v!jail**', 'Bir kullanıcıya jail cezası verir')
.addField('**v!unjail**', 'Bir kullanıcının jail cezasını kaldırır')
.addField('**v!jail-yetkili-rol @rol**', 'Jaile atıcak jailden kaldırıcak yetkili rolünü ayarlar')
.addField('**v!jail-yetkili-rol sıfırla**', 'Jaile atıcak jailden kaldırıcak yetkili rolünü sıfırlar')
        .setTimestamp()
        .setFooter('VICTORY JAİL SİSTEM')
  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-sistemi'
}