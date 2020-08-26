const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");

exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }

  if (user.bot || user === client.user) {
    return message.channel.send("This user is a bot.");
    // If the user was a bot, ignore it.
  }

  let balance = db.get(`account.${user.id}.balance`);
  if (!balance) balance = 0;
  else balance = balance;

  module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(userArgs[0]) ||
      message.guild.members.cache.find(
        x =>
          x.user.username.toLowerCase() === userArgs.slice(0).join(" ") ||
          x.user.username === userArgs[0]
      ) ||
      message.member;

    if (member.presence.status === "dnd")
      member.presence.status = "Do Not Disturb";
    if (member.presence.status === "online") member.presence.status = "Online";
    if (member.presence.status === "idle") member.presence.status = "Idle";
    if (member.presence.status === "offline")
      member.presence.status = "offline";

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment
      .utc(member.joinedAt)
      .format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;
    const embed = new Discord.MessageEmbed()
      .setColor(0x7289da)
      .setTitle(`Profile of ${user.tag}`)
      .setDescription(`Name = ${user.tag}`)
      .addField("Balance", `$${balance.toLocaleString()}`)
      .addField("Member ID", member.id)
      .addField(
        "Account Created On:",
        ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`,
        true
      )
      .addField(
        "Joined the server At",
        `${joineddate} \n> ${joined} day(S) Ago`
      )
      .addField("Status", status)
      .setThumbnail(user.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp(new Date()); // Optional :)
    return message.channel.send(embed);
  };

  exports.help = {
    name: "balance",
    aliases: ["bal"],
    description: "Checking yours, or other members money.",
    usage: "balance [@user | user ID]",
    example: "balance \nbalance @ray#1337"
  };
};
