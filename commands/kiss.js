const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://media4.giphy.com/media/G3va31oEEnIkM/giphy.gif",
         "https://media2.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
         "https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif",
         "https://media0.giphy.com/media/FqBTvSNjNzeZG/source.gif",
         "https://i.pinimg.com/originals/f1/5c/77/f15c774e5c58a9f210c7f7647da796f1.gif",
         "https://www.icegif.com/wp-content/uploads/anime-kiss-icegif-2.gif",
         "https://i.gifer.com/8Sbz.gif",
         "https://data.whicdn.com/images/106897705/original.gif",
         "http://24.media.tumblr.com/867584ae83cdaca2064bec258c197dc1/tumblr_mggon6vDQJ1s2n3h7o1_500.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} Kiss ${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username}Kisses.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "kiss",
     aliases: []
 }
