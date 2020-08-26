exports.run = async(client, message, args) => {
  message.reply(`${client.ws.ping}ms`)
}
