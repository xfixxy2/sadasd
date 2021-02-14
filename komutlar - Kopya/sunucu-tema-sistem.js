const Discord = require('discord.js');
const data = require('wio.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#00001')
.setTitle('VICTORY Sunucu Tema Şablon Sistem')
.setDescription(`**Tüm şablonlar ${client.user.username}'a Aittir.**
İçerikler de birden fazla tema var.

\`v!j4j-tema\` 
**Hazır __join 4 join__ sunucu teması yollar**

\`v!public-tema\` 
**Hazır karışık __public__ sunucu teması yollar**

\`v!oyun-tema\` 
**Hazır __oyun__ sunucu teması yollar**

\`v!gif-tema\` 
**Hazır gif share sunucu teması yollar**

\`v!botlist-tema\`
**BOTLİST TEMASINI YOLLAR**

\`v!sunucukur\`
**Sunucu Kurar tek kanalları silip kanal açar rolleri ayarlamaz (Sunucu Sahibi Olmalısınız)**

\`\`\`Farklı temalar için, Kendi sunucu şablonunuzu bize iletebilirsin!\`\`\``)
.setThumbnail(''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tema-sistem'
};