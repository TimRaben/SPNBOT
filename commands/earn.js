const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send(`<@86890631690977280> bal ${message.author}`)
}

module.exports.help = {
    name: "earn" 
}