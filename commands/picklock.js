const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply(":x: **-** Geef een Playstation Naam op!");

    var kanaal = message.member.guild.channels.cache.get("938757493516042290");

    let responses = [
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
        "**Gelukt**, je kan nu naar binnen gaan en je inbraak doorzetten.",
        "**Niet Gelukt**, je bent gefaald, probeer het een andere keer opnieuw, ga snel weg voordat de Politie er is.",
    ]

    let Response = responses[Math.floor(Math.random()*(responses.length)-1)]

    const embed2 = new discord.MessageEmbed()
        .setTitle("Spijkenisse Roleplay - Inbraak")
        .setDescription(`**MELDING** Er word momenteel ingebroken met een lockpicktel, de melding is gedaan door een buurt bewoner, de verdachte is mogelijk ${args[0]}!`)
        .setAuthor("Inbraak - Spijkenisse Roleplay")
        .setFooter("Spijkenisse Roleplay - Inbraak");

    const embed3 = new discord.MessageEmbed()
        .setTitle("Spijkenisse Roleplay - Inbraak")
        .setDescription(`Je hebt een Inbraak gestart, je gebruikt nu je lockpicktels om de deur open te maken!\n\nTijd Resterend: 30 Seconde.`)
        .setAuthor("Inbraak - Spijkenisse Roleplay")
        .setFooter("Spijkenisse Roleplay - Inbraak");

    const embed4 = new discord.MessageEmbed()
        .setTitle("Spijkenisse Roleplay - Inbraak")
        .setDescription(`De Inbraak is ${Response}`)


        kanaal.send("<@&866336898400911361>", embed2);

    message.channel.send(embed3)

    setTimeout(() => {

        message.channel.send(embed4)

    }, 30000);



}

module.exports.help = {
    name: "picklock",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}