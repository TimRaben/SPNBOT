const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("/bal")
}

module.exports.help = {
    name: "earn" 
}