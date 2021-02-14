const Discord = require('discord.js');
let db = require("wio.db")
const Client = new Discord.Client();
exports.run = (client, message) => {
	
	      let rochelle = message.mentions.users.first();

  if (!rochelle) rochelle = message.author;

   let abone =  db.fetch(`abone.${message.author.id}`);

	
	
const Embed = new Discord.MessageEmbed().setColor(0x36393F)
.setDescription(`Toplam Abone Verdigi Kisi : **${abone} Kisiye Abone Rolü Vermis**`)
message.channel.send(Embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aboneysay","abone-yetkili-say"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'abone-yetkili',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};