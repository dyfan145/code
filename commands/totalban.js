const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
    name: "bans",
    category: "extra",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
          const embed = new Discord.MessageEmbed()
          .setColor(0xFFFF00)
          .setDescription(`${bans.size}`)
          message.channel.send(embed);
          
                    
        })

    }
}
