const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "913744041286438912";

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {


        message.channel.send(":x: **|** Doe dit in een officiële sneltest!");
    
    }

}

module.exports.help = {
    name: "behandeldtest",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}