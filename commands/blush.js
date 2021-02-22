const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://media.tenor.com/images/4b0f5742525e44fad07d39590f61fcff/tenor.gif",
         "https://media.tenor.com/images/62eaf1d2b70f364b77e6dbaf1421c0cc/tenor.gif",
         "https://media.tenor.com/images/a426e322fc671776f40b148b7aed757a/tenor.gif",
         "https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif",
         "https://media.tenor.com/images/55a4024060f5271238150cbc92933fe8/tenor.gif",
         "https://media.tenor.com/images/e010cb377dd6093a8efb80e93ab3ede3/tenor.gif",
         "https://media.tenor.com/images/75936b8b93269bd293bd184eb209e358/tenor.gif",
         "https://media.tenor.com/images/bd01716fd6a850d98713fe08c5d2e467/tenor.gif",
         "https://media.tenor.com/images/29552298fc52815bc7c249aff147fe72/tenor.gif",
         "https://media.tenor.com/images/e46bdaf536ccc3b70b664a330fe02220/tenor.gif",
         "https://media.tenor.com/images/7476fb3f369d35a3a4f63552c97863c0/tenor.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
    } else {
        embed.setTitle(`${message.author.username} Blush.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "blush",
     aliases: []
 }
