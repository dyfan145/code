const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
        "https://media.discordapp.net/attachments/745984395235819530/745994973928751175/anime-hug-38.gif?width=486&height=234",
        "https://media.discordapp.net/attachments/745984395235819530/745995169026801677/anime-hug-59.gif?width=450&height=256",
        "https://cdn.discordapp.com/attachments/745984395235819530/745996174527561768/anime-hug-27.gif",
        "https://cdn.discordapp.com/attachments/745984395235819530/745996175118827524/anime-hug-2.gif",
        "https://media.discordapp.net/attachments/745984395235819530/745996175118827524/anime-hug-2.gif?width=576&height=324",
        "https://cdn.discordapp.com/attachments/745984395235819530/745996272741253190/anime-hug-19.gif",
        "https://cdn.discordapp.com/attachments/745984395235819530/745996629869330572/anime-hug-1.gif",
        "https://media.discordapp.net/attachments/745984395235819530/745997238991585300/anime-hug-61.gif?width=402&height=226",
        "https://cdn.weeb.sh/images/HyllFdmwZ.gif",
        "https://cdn.weeb.sh/images/ry6o__7D-.gif"

    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(colors.pink);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} hugs ${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username} wants a hug.`);
    }

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "hug",
     aliases: []
 }
