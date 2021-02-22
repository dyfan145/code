const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://media.tenor.com/images/fbbf9713d5202abed4ad4f4c3306cbe9/tenor.gif",
         "https://media.tenor.com/images/0e3829385e85a5c38010400642fba1dc/tenor.gif",
         "https://media.tenor.com/images/0e95047c3c3103eb894d478646e408af/tenor.gif",
         "https://media.tenor.com/images/45fe6919518ed00590df9a188dfe798a/tenor.gif",
         "https://media.tenor.com/images/f9fb544930a61a20cd93f10c3134ef58/tenor.gif",
         "https://media.tenor.com/images/5ab9ca34fce5ecbd2a99f2a041b93f4c/tenor.gif",
         "https://media.tenor.com/images/23e18072d8e9d68a5b2a42cd84178c55/tenor.gif",
         "https://media.tenor.com/images/bd8b82269d03ae96f55396e87076b9ef/tenor.gif",
         "https://media.tenor.com/images/27ec6b1095c0c0daa9173dab5220f763/tenor.gif",
         "https://media.tenor.com/images/a506dd0b87c41f1988e4bddf7dc2062d/tenor.gif",
         "https://media.tenor.com/images/3c97881ac3aaa1ffacdc45cc598bcdd6/tenor.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} Hightfive With${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username}Highfive Someone.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "highfive",
     aliases: ['tos']
 }
