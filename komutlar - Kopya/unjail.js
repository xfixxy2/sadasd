const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => {

  let yetkili = db.fetch(`jailyetkilirol_${message.guild.id}`)

  if(!message.member.roles.cache.has(yetkili)) return message.channel.send(`Bu Komudu Kullanabilmen İçin <@&${yetkili}> Rolüne Sahip Olmalısın! Degilsen v!jail-yetkili-rol  **@rol**`)
let kanal = db.fetch(`${message.guild.id}_jailkanal`)
let rol = db.fetch(`${message.guild.id}_jailrol`)
let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!kanal) return message.reply('Bu sunucu için jail sistemi açık deil ! Açmak için ; `v!jail-ayarla`')
if(!kullanıcı) return message.reply('Bir Kullanıcı Belirt !')
let logkanal = message.guild.channels.cache.get(kanal)
let jailrol = message.guild.roles.cache.get(rol)
let embed = new Discord.MessageEmbed()
.setTitle('Jail Log')
.setColor("RANDOM")
.addField(`Yetkili`, `${message.author}`)
.addField(`Kullanıcı`, `${kullanıcı}`)
.setFooter(`Bir kullanıcın jail cezası kaldırıldı !`)
.setTimestamp()
logkanal.send(embed)
message.guild.member(kullanıcı).roles.remove(jailrol)
message.channel.send('👍 **Jail kaldırma** işlemi başarılı !')
}
exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unjail',
  description: '',
  usage: ''
};