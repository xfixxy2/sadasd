const Discord = require('discord.js');
const data = require('wio.db');
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`Sunucunuzda **${bans.size}** Banlanmış Uye Bulunmakta.`))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["bansayısı"],
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "bansay",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansay"
  }
//Bilo Kod Paylaşım