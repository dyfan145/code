const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif",
         "https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif",
         "https://66.media.tumblr.com/cadf248febe96afdd6869b7a95600abb/tumblr_onjo4cGrZE1vhnny1o1_500.gifv",
         "https://i.pinimg.com/originals/c2/23/2a/c2232aec426d8b5e85e026cbca410463.gif",
         "https://64.media.tumblr.com/1e92c03121c0bd6688d17eef8d275ea7/tumblr_pjgkb7Q1oi1ubu1ls_500.gifv",
         "https://thumbs.gfycat.com/TautInformalIndianjackal-small.gif",
         "https://media0.giphy.com/media/L2z7dnOduqEow/200.gif",
         "https://data.whicdn.com/images/297125550/original.gif",
         "https://i.pinimg.com/originals/34/2e/30/342e301f019c079662176b57d66f91f9.gif",
         "https://thumbs.gfycat.com/BlankGiftedBurro-small.gif",
         "https://media.tenor.com/images/50b500c0fc0ad01a974af8b58b5e0c9b/tenor.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} Pat ${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username} Pat People.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "pat",
     aliases: []
 }
