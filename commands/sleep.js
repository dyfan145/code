const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://media.tenor.com/images/d35d9c3e50ef28255a364ca08fa7e66c/tenor.gif",
         "https://media.tenor.com/images/8b3ac1d9fcbac3701957d1826043fedc/tenor.gif",
         "https://media.tenor.com/images/34c6fdf206882d81d4fb0d6133f7f03f/tenor.gif",
         "https://media.tenor.com/images/9dda29007e302fa1323e4b614c2e6d8b/tenor.gif",
         "https://media.tenor.com/images/3ca01c7206f084d042304b9c4d3c80c0/tenor.gif",
         "https://media.tenor.com/images/f63df3a69adf37d6e3d5237db73ba8a1/tenor.gif",
         "https://media.tenor.com/images/73112f3e129b123cf20b1c3f5e896688/tenor.gif",
         "https://media.tenor.com/images/457bd6675bcca1405c90d3e3aa88f272/tenor.gif",
         "https://media.tenor.com/images/397861dcb46aaddc02a0d46beccb63ee/tenor.gif",
         "https://media.tenor.com/images/2f78cdc6d3c35a16a9d120eb8bee0a82/tenor.gif",
         "https://media.tenor.com/images/e45a7d4ca93fc4a70ba43b38cd0112dc/tenor.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
    } else {
        embed.setTitle(`${message.author.username} Sleeping.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "sleep",
     aliases: []
 }
