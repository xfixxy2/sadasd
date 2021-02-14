const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const umutbey = new Discord.MessageEmbed()
    .setColor('RED')
.addField('** v!balıktut  **', ' Balık Tutarsınız')
 .addField('** v!ara155  **', ' Polisleri Çagırır (Gerçekte Aramaz)')
  .addField('** v!1vs1  **', ' Duello Atarsınız Arkadasınızla')
.addField('** v!efkarım  **', ' Efkarınızı Olcer')
.addField('** v!yılbaşı  **', ' Yılbası Tarihini gösterir')
.addField('** v!slots  **', ' Slots Oynarsınız')
.addField('** v!şekerye  **', 'Şeker Yersiniz')
.addField('** v!emojiyazı  **', ' Yazdıgınız yazıyı emoji haline cevirir')
.addField('** v!boost-say  **', 'Sunucunun Boost Sayarsınız')
.addField('** v!aduketçek  **', ' Belirttiginiz Kisiye Aduket Çeker')
.addField('** v!aşkölçer  **', 'Belirttiginiz Kisi İle Askınızı Olcer')
    message.channel.send(umutbey).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['eglence'],
    permLevel: 0
};

exports.help = {
    name: 'eğlence',
      category: 'yardım',
      description: 'yardım',
};