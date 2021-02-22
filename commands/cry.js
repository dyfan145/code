const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://i.pinimg.com/originals/b4/b1/64/b4b1640525ecadfa1030e6096f3ec842.gif",
         "https://i.pinimg.com/originals/9f/6b/7b/9f6b7bf8ba47fe7915e34b44a9db105c.gif",
         "https://i.pinimg.com/originals/bf/36/4b/bf364b85e974ec479e34cec7a45d4c3a.gif",
         "https://data.whicdn.com/images/319312009/original.gif",
         "https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif",
         "https://media0.giphy.com/media/8YutMatqkTfSE/200.gif",
         "https://i.imgur.com/pls8egF.gif",
         "https://i.gifer.com/3B6X.gif",
         "https://66.media.tumblr.com/98c6d9e942941712e0ef9518fca97a7c/tumblr_opni85yA931v8tshbo1_400.gif",
         "https://i.imgur.com/7Yffi3x.gif",
         "https://i.pinimg.com/originals/3c/69/16/3c691659f01aba24f6a6deed24305989.gif",
         
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
    } else {
        embed.setTitle(`${message.author.username} Crying.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "cry",
     aliases: []
 }
