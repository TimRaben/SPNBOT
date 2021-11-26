const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete()

    if (!args[0]) return message.channel.send(":x:  **|** Geef een geldige bug report op!")

    var channel = '913838035379028048';

    message.channel.send(":white_check_mark: **|** Je hebt succesvol een Bug gerapporteerd!")

    setTimeout(() => {

        message.channel.bulkDelete(1)

    }, 1000);

    var embed = new discord.MessageEmbed()
        .setTitle("BUG REPORT")
        .addField("Bug", `${args.slice(0).join(" ")}`)
        .addField("Geraporteerd door:", `${message.author}`)
        .setFooter("Spijkenisse Roleplay • Bug Report • Geraporteerd op:")
        .setTimestamp();

    channel.send(embed)

}

module.exports.help = {
    name: "bugreport" 
}