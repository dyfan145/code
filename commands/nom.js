const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://media.tenor.com/images/6b62fa91af004f8a8f232c18f6ca2e7b/tenor.gif",
         "https://i.pinimg.com/originals/74/86/98/748698c14fe0b7b07bad7d8404e4455a.gif",
         "https://data.whicdn.com/images/279560594/original.gif",
         "https://media.tenor.com/images/15f3beb2b31a9cba0b15f35e3c3eb5b8/tenor.gif",
         "https://media.tenor.com/images/d65c6eaa8b0a6d7c782945f213fd4f60/tenor.gif",
         "https://media.tenor.com/images/435a23e4b93744acb8bc28feb8b66cc0/tenor.gif",
         "https://media0.giphy.com/media/4JpvyNYuyf0aI/giphy.gif",
         "http://pa1.narvii.com/6022/c7cfab3c4dbc56016f511d8c06029647a78e8283_00.gif",
         "https://media1.giphy.com/media/4iqn14Ns72tig/giphy.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} Nom${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username}Nom Random.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "nom",
     aliases: []
 }
