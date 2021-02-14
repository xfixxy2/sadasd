const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
}
  db.delete(`küfürE_${message.channel.id}`)
  message.reply(`Bu özellik **sadece bu kanalda** devre dışı bırakıldı.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["küfürkapat","küfür-kapat"], 
  permLevel: 0
};

exports.help = {
  name: 'küfür-engel-kapat',
  description: 'sayaç', 
  usage: 'sayaç'
};