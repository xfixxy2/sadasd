const db = require("wio.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
	 if(message.author.id !== message.guild.owner.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "v!";

  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: v!rol-koruma-engell aç & kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Dostum Zaten Rol Koruma Sistemi Aktif !!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Rol Koruma Sistemi Aktif Halde ... Silinen Rolleri Tekrar Açacağım**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription("**Rol Koruma Sistemi Kapatıldı !**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-k"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma-engell",
  description: "Rol koruma",
  usage: "rol-koruma"
};