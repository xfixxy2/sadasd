const Discord = require('discord.js')

const ms = require("ms")
const db = require('wio.db')
exports.run = async (client, message, args) => {  

	 if(message.author.id !== message.guild.owner.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')

  let cooldown = 86400, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));


        const Ottoman = new Discord.MessageEmbed()
    .setDescription('Her 24 Saate Bir Bu Komutu Kullanabilirsin!')
            .setColor(0x00ffff)
        message.channel.send(Ottoman)
 
    } else {
        const EGG = new Discord.MessageEmbed()
        .setDescription('Sunucunuz [burda](https://discord.gg/UvXA5sqPWW) tanıtıldı! \n Her 24 saate bir v!sunucutanıt komutunu kullanıp sunucunu tanıtabilirsin!')
        .setColor('GREEN')
 message.channel.send(EGG);
    message.channel.createInvite({maxAge: 0}).then((invite) => {

const webhook = new Discord.WebhookClient(
  "792032272018178098",
  "5i3kw5JH0rgAZCBO-5yFNNu2lShPIgZ8KoaCCfxNo5y2y9Tuc1sFSWWjf5fqDzI_4G1W"
);

        const Ottoman1 = new Discord.MessageEmbed()
        .setDescription('Sende Beni Ekleyerek Sunucunu Tanıtabilirsin!')
            .addField(`Sunucu Sahibi`, message.author.tag, true)
            .addField(` Sunucun İsmi`, message.guild.name, true)
      .addField(`Üye Sayısı`, message.guild.members.cache.size, true)
      .addField(`Davet Linki`, invite.url, true)
            .setColor('RANDOM')
        .setFooter('Victory Sunucu Tanıtma Sistemi')
      .setThumbnail(message.guild.iconURL)
  webhook.send(Ottoman1);
    db.set(`gunluk_${message.guild.id}`, Date.now());
        })}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu-tanıt'],
    permLevel: 0
}

exports.help = {
    name: 'sunucutanıt',
    description: 'Sunucunuzu Tanıtır.',
    usage: 'sunucutanıt'
}