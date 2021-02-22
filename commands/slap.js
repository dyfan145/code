const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         
         "https://i.pinimg.com/originals/cd/13/ad/cd13adaeb8b4208db2270d7c94963101.gif",
         "https://i.imgur.com/o2SJYUS.gif",
         "https://i.gifer.com/1Vbb.gif",
         "https://i.pinimg.com/originals/b6/e3/9e/b6e39e693be3968d212b0fe5754f85db.gif",
         "https://cdn.lowgif.com/full/a58d2aa5d2cb3809-.gif",
         "https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif",
         "https://64.media.tumblr.com/f325f2eff4aaa678d42c1a6e0c300204/ffdb2610e2b07805-74/s400x600/8cf96e6197bfc7e0350d1f2c533034c2692d3cb2.gifv",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} SLAP ${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username} SLAP A USER.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "slap",
     aliases: []
 }
