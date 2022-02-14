const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("⛔ **|** Sorry! Jij hebt niet de juiste bevoegdheid om iemand te whitelisten.");

    if (!args[0]) return message.reply("⛔ **|** Geef geen geldige persoon op.");

    var embedParent = new discord.MessageEmbed()
        .setTitle(`Spijkenisse Roleplay - Netwerk`)
        .setDescription(`${args.slice(1).join(" ")}`)
        .setAuthor("https://media.discordapp.net/attachments/838112437239939133/918131398991315074/unknown.png?width=679&height=678", "Spijkenisse Netwerk")
        .setThumbnail("https://media.discordapp.net/attachments/838112437239939133/918131398991315074/unknown.png?width=679&height=678")
        .setFooter('Spijkenisse Roleplay - Netwerk');

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    user.send(embedParent)

    message.channel.send(`Je hebt succesvol een Embed Prive bericht gestuurd naar ${args[0]}\n\nInhoud Bericht:\n${args.slice(1).join(" ")}`)

}

module.exports.help = {
    name: "msgembed" 
}