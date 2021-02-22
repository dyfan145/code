const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://i.pinimg.com/originals/0f/98/47/0f9847a5f258da9a3bdccc3860f91eb5.gif",
         "https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif",
         "https://media.tenor.com/images/d93523c4db7e20254c4dcd512029d51e/tenor.gif",
         "https://c.tenor.com/Fc8c39wyPOUAAAAj/party-time-jolly.gif",
         "https://media.tenor.com/images/b992e704a5169cba3a671e8151a7f862/tenor.gif",
         "https://c.tenor.com/uWGv_G1TubQAAAAj/jumping-anime.gif",
         "https://media.tenor.com/images/6ae2916e74ec42f679f42a5a7e4a746c/tenor.gif",
         "https://media.tenor.com/images/eab4aab7f7cd402ba01ccdac253b23d6/tenor.gif",
         "https://media.tenor.com/images/b9b6aaa81fe6db4525c23030328edbe9/tenor.gif",
         "https://media.tenor.com/images/999a72b5f4e640975b7f8495ef6fea38/tenor.gif",
         "https://media.tenor.com/images/dc1f38851d0517000696c2e39f7c27e3/tenor.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);
  

    if(args[0]) {
    } else {
        embed.setTitle(`${message.author.username} Feels Happy.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "happy",
     aliases: []
 }
