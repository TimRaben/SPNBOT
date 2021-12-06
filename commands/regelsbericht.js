const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var welkomEmbed = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Regels - Spijkenisse Roleplay")
            .setDescription(`Ja, ook wij hebben regels, dit doen wij niet om mensen te starren maar om een duidelijke grens te trekken over wat wij wel vinden kunnen en wat niet, helaas zijn dat er wel wat, zodra jij een van deze regels overtreed grijpen wij in als Staffteam, je word hier voor gemodereerd of te wel bestraft, dit kan zijn doormiddel van een Warning, Mute, Kick of zelf een tijdelijke Verbanning! Lees daarom de Regels goed door voordat je besluit om op het vinkje helemaal beneden te klikken.\n\nWij hebben wel wat Regels dit is omdat wij een grote Server zijn en helaas alles moeten noteren, zodra wij dit niet doen gaan mensen hier misbruik van maken, heel veel Regels die je leest zijn daarom ook van zelfsprekend maar moesten wij ze toch noteren.\n\n🔗  **|** https://sway.office.com/QJVFr8icY5GWzJgd?ref=Link`);

        return message.channel.send(welkomEmbed);

}

module.exports.help = {
    name: "regelsembed"
}