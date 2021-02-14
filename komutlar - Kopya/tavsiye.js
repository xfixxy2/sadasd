const Discord = require('discord.js');
const db = require("wio.db");

exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: v!tavsiye(öneri) <Tavsiyeniz>'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Tavsiyeniz Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Tavsiye", type)
.setThumbnail(message.author.avatarURL())
client.channels.cache.get('774721027988389939').send(embed2); // Kanal ID
db.add("kurallarimabuledenler", 1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri","öner","tavsiyever"],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};