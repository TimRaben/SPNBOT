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

    var test = "<:COVID:913049692529643530>";

    var staff = "<:SPN_Staff:913050805123284992>";

    var community = "<:SPN_Logo:913048554665279578>";

    setInterval(() => {
        const statuses = [
            `${test} - Covid | spn/sneltest`,
            `${community} - Community`,
            `${staff} - Staffleden`,
            `🎫 - Tickets`,
            `👥 - 1000 Leden`,
        ]
    
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 4500) // Second You Want to Change Status, This Cahnges Every 2 Seconds

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