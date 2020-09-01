const Discord = require("discord.js");
const client = new Discord.Client()
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("Pinging");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {
http.get('http://discord-tutori4l.glitch.me/');
}, 280000);
client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  client.user.setActivity("dm!help");
  client.user.setStatus('idle') //status idle(kuning)
});
client.on("message", async message => {
  if (message.content === "hai") message.reply("Hai trosss");
  if (message.content === "halo") message.reply("haloo");
  if (message.content === "oi") message.reply("Assalamualaikum");
  if (message.content === "alo") message.reply("alo");
  if (message.content === "hi") message.reply("Hi");
  if (message.content === "poker?") message.reply("JUDI TOLOL");
  if (message.content === "konnichiwa") message.reply("konnichiwa");
  if (message.content === "kontol") message.reply("dont toxic")
//COMMAND BOT DI SERVER.JS
const prefix = "dm!"
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

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://d1eet599aje0m8.cloudfront.net/wp-content/uploads/2020/07/Stills03_JPEG_3.jpg" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
    );   
   });

//2

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-goodbye');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://d1eet599aje0m8.cloudfront.net/wp-content/uploads/2020/07/Stills03_JPEG_3.jpg" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
    );   
   });

//Goodbye 
client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-goodbye');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://cdn.discordapp.com/attachments/747422146132705310/747434027253760040/unknown.png" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
     `Goodbye, ${member.user.username}! We Hope You back again :(`,
      attachment
    );   
   });

//2

client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'goodbye');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://cdn.discordapp.com/attachments/747422146132705310/747434027253760040/unknown.png" })

    const attachment = new Discord.MessageAttachment(
      data,
      "goodbye-image.png"
    );

    channel.send(
      `Goodbye, ${member.user.username}! We Hope You back again :(`,
      attachment
    );   
   });
client.login(process.env.TOKEN);
