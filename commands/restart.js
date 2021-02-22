module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== 'Owner Id') {
            return message.channel.send('Your Not My Developer')
        }
        await message.channel.send('Restarting Bot')
        process.exit();
    }
}
