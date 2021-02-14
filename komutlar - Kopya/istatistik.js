const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
.setDescription(`**Victory Bot İstatistikleri**`)
  .addField(`Bot Sahibi `, `<@735555273644703915>`, true)
.addField(`Bot Geliştiricisi `, `<@735555273644703915>`, true)
    .addField("Bellek Kullanımı  ", `${(process.memoryUsage().heapUsed / 4096 / 4096).toFixed(2)} MB`, true)
  .addField("Sunucu Sayısı ", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("Toplam Kullanıcı Sayısı ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Kanal Sayısı", `${client.channels.cache.size.toLocaleString()}`, true)
  .addField(`Ne Kadar Süredir Aktif `, `${duration}`, true)
  .addField("Ping", `${client.ws.ping}`, true)
  .addField("Discord.js Sürümü ", `${Discord.version}`, true)
  .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/2BVEnTZ2)`, true)
  .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/api/oauth2/authorize?client_id=740345917542105149&permissions=8&scope=bot)`, true)
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};