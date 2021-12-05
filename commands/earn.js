const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send(`!add-money ${message.author} 500`)
}

module.exports.help = {
    name: "earn" 
}