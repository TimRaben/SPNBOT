const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send(`<@292953664492929025> bal ${message.author}`)
}

module.exports.help = {
    name: "earn" 
}