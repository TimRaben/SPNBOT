const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    user.send(`${args.slice(1).join(" ")}`)

}

module.exports.help = {
    name: "earn" 
}