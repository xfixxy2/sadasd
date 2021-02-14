const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db =  require("wio.db");
const talkedRecently = new Set();

let botid = ('775775462180913184') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "v!";
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **Kayıt Menüsüne Hoşgeldiniz** `)
        .setDescription(`
 
  **» v!alınacak-rol** **=** Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
  **» v!alınacak-rol sıfırla ** **=** Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
  **» v!kayıt-kanal** **=** Kayıtın Yapılacağı Kanalı Belirlersiniz.
  **» v!kayıt-kanal sıfırla** **=** Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
  **» v!kayıt-yetkili sıfırla** **=** Kayıt Edebilecek Yetkiyi Sıfırlar.
  **» v!kayıt-yetkili** **=** Kayıt Edebilecek Yetkiyi Ayarlar.
  **» v!erkek-rol ** **=** Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
  **» v!erkek-rol sıfırla ** **=** Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
  **» v!kız-rol** **=** Kayıt Edilince Verilecek Kız Rolü Ayarlar.
  **» v!kız-rol sıfırla** **=** Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
  **» v!erkek ** **=** Erkekleri Kayıt Etmeye Yarar.
  **» v!kız ** **=** Kızları Kayıt Etmeye Yarar.
`)
        .setThumbnail(``)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};