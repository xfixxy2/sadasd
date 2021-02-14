const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

exports.run = async (client, message, args) => {


 const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const resim = await randomPuppy(random);
  
        const embed = new Discord.MessageEmbed()
        .setTitle(`${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setImage(resim)
        message.channel.send(embed);
    }
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'meme' 
};