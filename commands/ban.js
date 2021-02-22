const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`You are unable to ban members`)
        }
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
          const embed = new Discord.MessageEmbed()
          .setColor(0xFFFF00)
          .setDescription(`${member}Has Been Banned!`)
          message.channel.send(embed)
        } catch (e) {
            return message.channel.send(`User is not in the server!`)
        }

    }
}
