const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var welkomEmbed = new discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Welkom - Spijkenisse Roleplay")
            .setDescription("Hey Hallo! Welkom in onze Server, wij waarderen het enorm dat je onze server gejoined bent, hieronder kan je op een emoji klikken om je te verifiëren, zodra je dit hebt gedaan kan je in de openbare kanalen typen & kan je alle kanalen bekijken die gerelateerd zijn aan Inwoners.");

        return message.channel.send(welkomEmbed);

}

module.exports.help = {
    name: "welkomembed"
}