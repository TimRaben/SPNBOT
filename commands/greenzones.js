const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

        return message.channel.send("https://media.discordapp.net/attachments/934085708069609482/947994675569131590/7DB44316-5B73-481C-A8ED-81CEBF8A4128.jpg?width=1205&height=678", "https://media.discordapp.net/attachments/934085708069609482/947994876711141466/87F56887-51B3-4722-8F3C-57EEC2E49F1D.jpg?width=1250&height=678", "https://media.discordapp.net/attachments/934085708069609482/947994877218664468/C5BC57E7-C783-4A03-8808-1FCE8C5B266D.jpg?width=1205&height=678", "https://media.discordapp.net/attachments/934085708069609482/947994877747163196/B578E6E1-0D36-4520-BD70-903FE838CA4C.jpg?width=1205&height=678", "https://media.discordapp.net/attachments/934085708069609482/947994935544643604/98D6D4E7-33FB-4F2C-8F93-107D6508417E.jpg");

}

module.exports.help = {
    name: "greenzones" 
}