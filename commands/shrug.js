const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://media.tenor.com/images/7787afe13149ca16b616585e2ad220fa/tenor.gif",
         "https://media.tenor.com/images/194755415b53f3e4515c06b2a5dd6dc6/tenor.gif",
         "https://media.tenor.com/images/6d6842feb9623c0f4e119ac900854252/tenor.gif",
         "https://media.tenor.com/images/7787afe13149ca16b616585e2ad220fa/tenor.gif",
         "https://media.tenor.com/images/6def41cfbfc28b3be8c20be9d6ef2dde/tenor.gif",
         "https://media.tenor.com/images/8a6ed3d685fb66e6e6d3b4b02f882ce9/tenor.gif",
         "https://media.tenor.com/images/c4505a05dc524b81a4d80a8346a2c095/tenor.gif",
         "https://media.tenor.com/images/2d3f500ac23c0c2a4dade8a98ac67b41/tenor.gif",
         "https://media.tenor.com/images/f9269d307f3c5e4ff0d37c3dfdaebb56/tenor.gif",
         "https://media.tenor.com/images/daf1fbfb9ea7f3e3cb203e7246f186ab/tenor.gif",
         "https://media.tenor.com/images/658f814946580227d7735304147b0364/tenor.gif"
         
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
    } else {
        embed.setTitle(`${message.author.username} Shrug .`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "shrug",
     aliases: []
 }
