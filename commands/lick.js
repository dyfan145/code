const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://i.pinimg.com/originals/ce/f5/69/cef569820773b0f5d54ee34cfa18e1f8.gif",
         "https://cdn.weeb.sh/images/rJ6hrQr6-.gif",
         "https://i.kym-cdn.com/photos/images/original/001/401/543/543.gif",
         "https://thumbs.gfycat.com/PositiveGlossyBunny-max-1mb.gif",
         "https://i.pinimg.com/originals/c1/08/74/c10874d3a0f185847853725d1c554e56.gif",
         "https://i.pinimg.com/originals/0d/b9/38/0db9387aff47ade00fb43c7b3f6f6498.gif",
         "https://media0.giphy.com/media/4JpvyNYuyf0aI/200.gif",
         "https://thumbs.gfycat.com/CreamyPresentAmericanquarterhorse-size_restricted.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} Lick ${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username}Licking.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "kiss",
     aliases: []
 }
