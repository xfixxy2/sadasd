const Discord = require('discord.js');
exports.run = (client, message) => {
if(message.channel.nsfw == false) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setImage('https://support.discord.com/hc/article_attachments/360007795191/2_.jpg').setDescription(`${message.author} **Kanal __NSFW__ olarak aktif değil. Kontrol et!**`).setColor('#00001'))
  const Embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setFooter("VİCTORY")
.setImage(client.emojis.cache.random().url)
  message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["random-emoji"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'randomemoji',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};