const Discord = require('discord.js');
const db = require('wio.db')
exports.run = (client, message, args) => {

  let yetkili = db.fetch(`jailyetkilirol_${message.guild.id}`)

  if(!message.member.roles.cache.has(yetkili)) return message.channel.send(` Bu Komudu Kullanabilmen İçin <@&${yetkili}> Rolüne Sahip Olmalısın! Degilsen v!jail-yetkili-rol  **@rol**`)
let kanal = db.fetch(`${message.guild.id}_jailkanal`)
let rol = db.fetch(`${message.guild.id}_jailrol`)
let kullanıcı = message.mentions.users.first() || message.guild.members.cache.get(args[0])
let sebep = args.slice(1).join(' ')
if(!kanal) return message.reply('Bu sunucu için jail sistemi açık deil ! Açmak için ; `v!jail-ayarla`')
if(!kullanıcı) return message.reply('Bir Kullanıcı Belirt !')
if(!sebep) return message.reply('Bir Sebep Belirt !')
let logkanal = message.guild.channels.cache.get(kanal)
let jailrol = message.guild.roles.cache.get(rol)
let embed = new Discord.MessageEmbed()
.setTitle('Jail Log')
.setColor("RANDOM")
.addField(`Yetkili`, `${message.author}`)
.addField(`Kullanıcı`, `${kullanıcı}`)
.addField(`Sebep`, `**${sebep}**`)
.setFooter(`Bir kullanıcı jail cezasına çarptırıldı !`)
.setTimestamp()
logkanal.send(embed)
message.guild.members.cache.get(kullanıcı.id).roles.cache.forEach(r => {
  message.guild.members.cache.get(kullanıcı.id).roles.remove(r.id)
})

message.guild.member(kullanıcı).roles.add(jailrol)
message.channel.send('👍 **Jail atma** işlemi başarılı !')
}

exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'jail',
  description: '',
  usage: ''
};