const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {

    let gifs = [
         "https://cdn.discordapp.com/attachments/741242990290534531/746003957800763542/169717.gif",
         "https://i.imgur.com/g91XPGA.gif",
         "https://i.imgur.com/g91XPGA.gif",
         "https://cdn172.picsart.com/222035215014201.gif?to=min&r=640f",
         "https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446",
         "https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif",
         "https://3.bp.blogspot.com/-k8BL9FEo_YI/Vx01PlromnI/AAAAAAAAAEo/vVEBwcQ1WHspWeDsuUdfFQp47YUj7HEBgCLcB/s1600/Punch%2B5.gif",
         "https://3.bp.blogspot.com/-f2C5CBKw05A/W95nlOPZ4HI/AAAAAAABXVo/eU16NRt_qQIh64c3AvSScDYuRL2H6lAegCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BFairy%2BTail%2BFinal%2BSeason%2B-%2BEpisode%2B282%2B-%2BLucy%2BPunch.gif",
         "https://capinaremos.com/wp-content/uploads/sites/2/2016/05/Omake-Gif-Anime-One-Punch-Man-Episode-4-Sonic-Has-an-Accident.gif",
         "https://thumbs.gfycat.com/GrandAlertCaimanlizard-size_restricted.gif",
         "https://i.pinimg.com/originals/bc/96/17/bc9617a2460e4640fcd9cf474bea2c10.gif",
         "https://cdn.zerotwo.dev/PUNCH/8405ceed-4885-484f-a383-370940fcd33d.gif",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed();
    embed.setColor(colors.pink);
    embed.setImage(pick);

    if(args[0]) {
        let user = message.mentions.members.first();
        embed.setTitle(`${message.author.username} PUNCH ${bot.users.cache.get(user.id).username}!`)
    } else {
        embed.setTitle(`${message.author.username} PUNCH A USER.`);
    }
 

    message.channel.send(embed);

 }
 
 module.exports.help = {
     name: "punch",
     aliases: []
 }
