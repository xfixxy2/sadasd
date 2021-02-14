const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:tenor:775814670706671616> Bu komutu kullanabilmek için `Mesajları Yönet` iznine sahip olmalısın.'));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:tenor:775814670706671616> Silinecek mesaj miktarını girmelisin.'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:tenor:775814670706671616> `100` üzeri mesaj miktarını aynı anda silemem.'));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed().setDescription('<a:tenor:775814670706671616> '+`${args[0]}`+' adet mesaj başarıyla silindi.')).then(m => m.delete({timeout: 5000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle"],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};