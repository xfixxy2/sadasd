const Discord = require("discord.js");
const db = require('wio.db');

exports.run = async (client, message, args) => {
 if(message.author.id !== "735555273644703915") if(message.author.id !== "") return message.channel.send("hoop bilader sahip komutu bu");
  let user = args[0]
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Karalisteden kaldırmak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
  };
  
  
  db.delete(`karalist_${user}`)
  
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${user}> adlı kullanıcı başarıyla karalisteden çıkartıldı!`)
  return message.channel.send({embed: embed})
 //if (client.users.cache.get(user).send(`<a:cryptoonay:770187690402250772> <@${message.author.id}> adlı yetkilimiz tarafından beyazlisteye alındın! Artık Crypto'nun komutlarını kullanabilirsin.`)){
 // } else return
  
  //sa
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whitelist", "beyaz-liste"],
  permLevel: 0
};

exports.help = {
  name: "beyazliste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyazliste <kullanıcı ID>"
};  