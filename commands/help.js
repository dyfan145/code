const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .addField(`Economy:dollar:`,`\`transfer\` \`balance\` \`flip\` \`daily\``)
  .addField(`Music:musical_note:`,`\`play\` \`stop\` \`skip\` \`leave\` \`queue\` \`nowplaying\` \`resume\` \`forceskip\` \`playlist\` \`remove\` \`volume\``)
  .addField(`Fun:slight_smile:`,`\`snipe\` \`weather\` \`meme\` \`say\` \`avatar\` \`eval\` \`ping\` \`calculate\``)
  .addField(`Bot Info:robot:`,`\`stats\` \`uptime\``)
  .addField(`Administrator:shield:`,`\`kick\` \`warn\` \`clear\``)
  .addField(`Corona`,`\`corona\``)
  .addField(`Action`,`\`punch\` \`hug\``)
  .addField(`Wellcome Goodbye`,`\`setwelcome\` \`setgoodbye\``)
  message.channel.send(embed)
}
