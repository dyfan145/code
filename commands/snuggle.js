


const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
        "https://c.tenor.com/tGCwbA8yu2MAAAAj/love-you-hug.gif",
         "https://media.tenor.com/images/325e0d3ac7241514370a73bc11c64c0f/tenor.gif",
         "https://media.tenor.com/images/822d765803f15efb5a8d8de0f9e5c4c5/tenor.gif",
         "https://media.tenor.com/images/4481c2886c1e7e5fb0bd725eb04cd9a5/tenor.gif",
         "https://media.tenor.com/images/57559abb91934c8aaa325a71b0d01706/tenor.gif",
         "https://media.tenor.com/images/3aec56c2032b48a2627aebf25c73252b/tenor.gif",
         "https://media.tenor.com/images/853bb442dd8eae619c4a524ffad4261c/tenor.gif",
        "https://media.tenor.com/images/b62c99771c7ab751f80d2bb561c75068/tenor.gif",
      "https://media.tenor.com/images/a2fe086b86d3735ddeb4241bbca3f75a/tenor.gif",
      "https://media.tenor.com/images/d03ab0adb5173ce512f255f1e23ca399/tenor.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} Snuggle  ${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username} Snuggle.`);
    }

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "hug",
     aliases: []
 }
