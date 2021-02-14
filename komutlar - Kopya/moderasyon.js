const Discord = require('discord.js');
const Client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
let Selam = ayarlar.prefix
let Gif = `https://api.creavite.co/out/4de1bb0d-12b9-4c1f-b9cc-bed7f0ec54da_standard.gif`

exports.run = (client, message) => {
 const Embed = new Discord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
**${Selam}mod-log #kanal** \n-> Mod-log ayarlar.
**${Selam}mod-log sıfırla** \n-> Mod-log sıfırlar.
**${Selam}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
**${Selam}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
**${Selam}küfüraç** \n-> Küfür engel açar/kapatır.
**${Selam}reklam aç** \n-> Reklam engeli açar
**${Selam}reklam kapat** \n-> Reklam engeli belirtilen kanalda kapatır
**${Selam}sa-as aç** \n-> SA-AS sistemini açar.
**${Selam}sa-as kapat** \n-> SA-AS sistemini kapatır.
**${Selam}sil** \n-> Yazdığınız miktar kadar mesaj siler.
**${Selam}say** \n-> Sunucu bilgilerini gösterir.
**${Selam}oylama** \n-> Oylama yapar.
**${Selam}otorol** \n-> Otorol Sistemini Gösterir
**${Selam}nuke** \n-> BetterAntiSpam Botundaki Nuke Komudu Kanalı silir tekrar açar yetkileriyle birlikte.
`)
 .setFooter(`Vıctory`)
 .setTimestamp()
 .setImage(Gif)
 message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
