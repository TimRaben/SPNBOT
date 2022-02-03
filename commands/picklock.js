const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply(":x: **-** Geef een Playstation Naam op!");

    var kanaal = message.member.guild.channels.cache.get("938757493516042290");

    const embed2 = new discord.MessageEmbed()
        .setTitle("Spijkenisse Roleplay - Inbraak")
        .setDescription(`**MELDING** Er word momenteel ingebroken met een lockpicktel, de melding is gedaan door een buurt bewoner, de verdachte is mogelijk ${args[0]}!`)
        .setAuthor("Inbraak - Spijkenisse Roleplay")
        .setFooter("Spijkenisse Roleplay - Inbraak");

    const embed3 = new discord.MessageEmbed()
    .setTitle("Spijkenisse Roleplay - Inbraak")
    .setDescription(`Gelukt!`)
    .setAuthor("Inbraak - Spijkenisse Roleplay")
    .setFooter("Spijkenisse Roleplay - Inbraak");


        kanaal.send(embed2);

        message.channel.send(embed3)


}

module.exports.help = {
    name: "picklock",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}