const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://c.tenor.com/-169fSymeTgAAAAj/anime-girl.gif",
         "https://c.tenor.com/8IOQ2Pby-KQAAAAj/thumbs-up-anime.gif",
         "https://media.tenor.com/images/b6703a16682d90a19be003ca3c410633/tenor.gif",
         "https://media.tenor.com/images/168602a4ea3c89934202cf88261945e4/tenor.gif",
         "https://media.tenor.com/images/8a8193407b5ae046208be075f6fe1a71/tenor.gif",
         "https://media.tenor.com/images/e7baddcacfd86745777b47db5241b85a/tenor.gif",
         "https://media.tenor.com/images/c2352578e1f06a42d37c3c78969bbe40/tenor.gif",
         "https://media.tenor.com/images/f0d042958f0c96ffda89861b651667ca/tenor.gif",
         "https://media.tenor.com/images/c2352578e1f06a42d37c3c78969bbe40/tenor.gif",
         "https://media.tenor.com/images/6da7bfe4cb3ed5dc269ea9795b1ee9ca/tenor.gif",
         "https://media.tenor.com/images/3a74ba880147672ba359596fa6714cab/tenor.gif",
         
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(0xFFFF00);
    embed.setImage(pick);

    if(args[0]) {
    } else {
        embed.setTitle(`${message.author.username} Thumbs Up.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "thumbs",
     aliases: []
 }
