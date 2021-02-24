const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .addField(`Fun:slight_smile:`,`\`snipe\` \`weather\` \`meme\` \`say\` \`avatar\` \`eval\` \`ping\` \`calculate\``)
  .addField(`Bot Info:robot:`,`\`stats\` \`uptime\` \`invite\``)
  .addField(`Administrator:shield:`,`\`kick\` \`warn\` \`clear\``)
  .addField(`Corona`,`\`corona\``)
  .addField(`Action`,`\`punch\` \`hug\``)
  .addField(`Wellcome Goodbye`,`\`setwelcome\` \`setgoodbye\``)
  .addField(`invite link `,`[\`Bot Invite\`](https://discord.com/oauth2/authorize?client_id=726093020981625019&scope=bot&permissions=2146958847)`)
  message.author.send(embed)
  message.channel.send
}
