const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

exports.run = async (bot, msg, args) => {
    
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı Bir Oyun Yok."
        userinfo.status = user.presence.status.toString()
  
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
    
	
	let slm = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar',
  mobile: 'Mobil'
}

nitroDurum = false;
if(user.presence.activities[0]) {
if(user.presence.activities[0].emoji) {
if(user.presence.activities[0].emoji.animated) nitroDurum = true;
};
};
if(user.avatarURL().includes('.gif')) nitroDurum = true;

let rozetler = false;
if(user.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let userFlags = user.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', 'Bravery')  
.replace('HOUSE_BRILLIANCE', 'Brilliance')
.replace('HOUSE_BALANCE', 'Balance')
.replace('VERIFIED_DEVELOPER', '1. Dönemde Doğrulanmış Bot Geliştiricisi')
.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
.replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
.replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
.replace('EARLY_SUPPORTER', 'Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
.replace('VERIFIED_BOT', 'Onaylı Bot');
	
	
let gecen = new Date().getTime() - msg.guild.members.cache.get(user.id).user.createdAt
  
  
        userinfo.dctarihkatilma =  moment.duration(gecen).format('Y [Yıl,] D [Gün, ] h [Saat, ] m [Dakika önce] s [Saniye Önce]') 
		

let gecenn = new Date().getTime() - msg.guild.members.cache.get(user.id).joinedAt


        userinfo.dctarih =  moment.duration(gecenn).format('Y [Yıl, ] D [Gün, ] h [Saat, ] m [Dakika önce] s [Saniye Önce]')

  
        const uembed = new Discord.MessageEmbed()
        
        .setTitle(user.tag)
        .addField(`Şu Anda Oynadığı Oyun :`, userinfo.od1, false)
        .addField(`Durum :`, userinfo.status, false)
        .setColor('RANDOM')
        .addField(`Katılım Tarihi (Discord) :`, userinfo.dctarihkatilma, false)
        .addField(`Katılım Tarihi (Sunucu) :`, userinfo.dctarih, false)
        .addField(`Kimlik :`, userinfo.id, true)
        .addField(`Bot Mu? :`, userinfo.bot, true)
        .addField(`Roller :`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu Kullanıcıda Hiç Rol Bulunmuyor!**"}`, false)        
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcı-bilgim','kullanıcı-bilgi','kullanıcıbilgi',"kb"],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgim',
  description: 'Kinda Code & Only V12.',
  usage: 'kullanıcıbilgim'
};