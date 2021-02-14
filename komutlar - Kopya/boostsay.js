const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
    const westpro = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("  Boost Sayısı", message.guild.premiumSubscriptionCount.toString())
    message.channel.send(westpro);

}

exports.conf = {
    enabled: true,///message.guild.premiumSubscriptionCount.toString()
    guildOnly: false,
    aliases: ['boostlar','boost-say'],
    permLevel: 0
};

exports.help = {
    name: 'boost-say',
    description: 'boostsay',
 } 