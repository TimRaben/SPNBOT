module.exports.run = async (client, message, args) => {

    return message.channel.send(`**Spijkenisse Roleplay - BOT Status/Ping**\n\nPong: ` + (message.createdTimestamp - Date.now()) + ` ms\n\nš¢ - Goed | š  - Stabiel | š“ - Laag\n\n**BOT Snelheid:** š¢\n**Database:** š“\n**Ddoss Protectie:** š¢\n**Algemene Ping:** š `);

}

module.exports.help = {
    name: "ping",
    aliases: "status",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}