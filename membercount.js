module.exports = (client) => {
  const channelId = '812628616130068491'

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild)) 

  const guild = client.guilds.cache.get('691602333364387840')
  updateMembers(guild)
}
   
