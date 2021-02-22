const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const db = require("quick.db")
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("Pinging");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {
}, 280000);
client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  client.user.setActivity("ohelp");
  client.user.setStatus('idle') //status idle(kuning)
});
client.on("message", async message => {
if (message.content === "Hi") message.reply("HI");
//COMMAND BOT DI SERVER.JS
const prefix = "d!"
if(!message.content.startsWith(prefix)) return null;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;
  
  

let commandFiles;
try{
  commandFiles = require(`./commands/${cmd}.js`)
} catch (err) {

}
const db = require("quick.db")
try {
  commandFiles.run(client, message, args)
} catch (err) {
  } finally {
    console.log(`${message.author.tag} menggunakan command ${prefix}${cmd}`)
  }

});

//wellcome
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

client.once("ready", () => {
  console.log("Ready!");
});


client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '👋┃welcome-goodbye');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://i.ytimg.com/vi/sXQ61wpzSyA/maxresdefault.jpg" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `
    > Welcome to Our Server, Alliance Ezeqiel ${member.user.username}! 
    > Please read the Guidelines at <#812329872075653170>
    > And Thankyou for Coming`,
      attachment
    );   
   });

//goodbye

client.once("ready", () => {
  console.log("Ready!");
});


client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '👋┃welcome-goodbye');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://i.imgur.com/Jm3gtgH.jpg" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `Goodbye, ${member.user.username}!`,
      attachment
    );   
   });
//p

client.login(process.env.TOKEN);

//stats
const memberCount = require('./membercount.js')

client.on('ready', () => {
  console.log('The client is ready!')

  memberCount(client)
})
//bots

//stats
