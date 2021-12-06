const discord = require("discord.js");
const botConfig = require("./botConfig.json");

//  Command handler
const fs = require("fs");
const { isFunction } = require("util");
const { MessageButton } = require('discord-buttons');

const client = new discord.Client();

//  Command handler
client.commands = new discord.Collection();


//  Command handler
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`✅ De file ${f} is geladen!`);

        client.commands.set(fileGet.help.name, fileGet);
    });

});

client.on("ready", async () => {

    console.log(`${client.user.username} is herstart.`);

    setInterval(() => {
        const statuses = [
            `🧪 - Covid | spn/sneltest`,
            `🌍 - Community`,
            `⚡ - Staffleden`,
            `🎫 - Tickets`,
            `👥 - 1000 Leden`,
        ]
    
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 4500) // Second You Want to Change Status, This Cahnges Every 2 Seconds

    const channel = "914182141137522688";

    const youtubeEmoji = "✅";

    const inwoner1Rol = message.guild.roles.cache.find(role => role.name === "» 🏡 | Inwoner");
    const inwoner2Rol = message.guild.roles.cache.find(role => role.name === "➖➖➖Inwoner➖➖➖");
    const giveawayRol = message.guild.roles.cache.find(role => role.name === "»  ☃️| Whitelisted");
    const pollRol = message.guild.roles.cache.find(role => role.name === "➖➖➖Whitedlisted➖➖➖");

    const embed = new discord.MessageEmbed()
        .setTitle("Spijkenisse Roleplay - Verificatie")
        .setDescription(`Zodra je hieronder op dit ✅ icoontje klikt ga je akkoord met de de Regels, zodra je dit doet wensen wij je heel veel succes op deze server!`)
        .setColor("ORANGE")

        setTimeout(() => {

            var embedMessage = channel.send(embed);

            embedMessage.react(youtubeEmoji);

        }, 7500);
    

    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == youtubeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(inwoner2Rol);
            } else if (reaction.emoji.name == youtubeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(inwoner1Rol);
            } else if (reaction.emoji.name == youtubeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(giveawayRol);
            } else if (reaction.emoji.name == youtubeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(pollRol);
            } 
        } else {
            return;
        }
    });

});     

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;


    // var msg = message.content.toLowerCase();

    // for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

    //     if (msg.includes(swearWords["vloekwoorden"][i])) {

    //         message.delete();

    //         return message.reply("Gelieve niet te vloeken").then(msg => msg.delete({ timeout: 3000 }));

    //     }

    // }


    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");


    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    //  Command handler
    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));


    if (commands) commands.run(client, message, arguments);

});

client.login(process.env.token);