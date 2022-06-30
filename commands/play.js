const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.reply("Connecteer met een spraakkanaal :D")

    if(message.guild.me.voice.channel) return message.channel.send("De BOT is al verbonden.");

    if(!args[0]) return message.reply("Gelieve een URL Link mee te geven.");

    var validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send("Gelieve een geldige URL op te geven.");

    var info = await ytdl.getInfo(args[0]);

    var options = { seek: 3, volume: 1 };

    var channelJoin = message.member.voice.channel.join()
        .then(voiceChannel => {

            var stream = ytdl(args[0], { filter: 'audioonly' });

            var dispatcher = voiceChannel.play(stream, options);

        }).catch(console.error);
     
    message.channel.send(`Nu aan het spelen ${info.title}`);


    }


module.exports.help = {
    name: "play",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}