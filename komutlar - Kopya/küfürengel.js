const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten açıkmış :slight_smile:`)
}
  db.set(`küfürE_${message.channel.id}`, "aktif")
  message.reply(`Bu özellik **başarıyla sadece bu kanalda açıldı.** ${client.emojis.cache.get("776806992924377088")}`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'küfüraç',
  description: 'sayaç', 
  usage: 'sayaç'
};