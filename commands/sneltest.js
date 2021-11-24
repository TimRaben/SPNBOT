const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var kanaal = message.member.guild.channels.cache.get("912709688573972560");

    let responses = [
        "Positief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Positief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief",
        "Negatief"
    ]
    let Response = responses[Math.floor(Math.random()*(responses.length)-1)]

    const embed2 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 0% (dit word echt bijgewerkt)*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed3 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 10%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed4 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 20%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed5 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 30%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed7 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 40%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed8 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 50%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");
        
        const embed9 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 60%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed10 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 70%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed11 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 80%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed12 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.n\n*Testuitslag Genereren: 90%*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

        const embed13 = new discord.MessageEmbed()
        .setTitle("Bedankt voor het invoeren van deze vragen!")
        .setDescription(`We zijn je Test aan het controleren, binnen 1 minuut is je uitslag bekend!\n\nJe uitslag komt te staan in ${message.member.guild.channels.cache.get('912709688573972560').toString()}.\n\n*Testuitslag Genereren: 100% (Voltooid)*`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

    const embed1 = new discord.MessageEmbed()
        .setTitle("Je hebt succesvol een Snel Test gedaan bij de GGD...")
        .setDescription("We zijn je Test aan het controleren...\n\nDe GGD wilt u graag wat vragen stellen, beantwoord de vragen hieronder s.v.p.")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/1200px-Logo_rijksoverheid.svg.png")
        .setAuthor("GGD - Spijkenisse Roleplay", "https://www.cowerk.nl/wp-content/uploads/2021/07/ggd-logo-we.jpg")
        .setFooter("Spijkenisse Roleplay - Corona Test");

    const uitslag = new discord.MessageEmbed()
        .setTitle("Corona Uitslag")
        .setColor("ORANGE")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_rijksoverheid.svg/260px-Logo_rijksoverheid.svg.png")
        .setDescription(`De Test Uitslag van ${message.author} is **${Response}**, zodra je Positief getest bent ben je verplicht om zo min mogelijk contact te hebben met andere Inwoners, voor meer informatie PM een Stafflid.\n\n**Informatie:**\nTestuitslag: ${Response}\nInwoner: ${message.author}\n\nVoor verdere informatie kijk op https://www.rijksoverheid.nl/`)
        .setAuthor("GGD - Spijkenisse Roleplay")
        .setTimestamp();


    var vraag1 = new discord.MessageEmbed()
        .setTitle("GGD - Spijkenisse Roleplay")
        .setColor("ORANGE")
        .setDescription("Wat is je naam?")
        .setFooter("Corona Test - Spijkenisse Roleplay")
    
    var vraag2 = new discord.MessageEmbed()
        .setTitle("GGD - Spijkenisse Roleplay")
        .setColor("ORANGE")
        .setDescription("Ben je de afgelopen dag (roleplay) bij mensen in de buurt geweest? (zo ja hoeveel?)")
        .setFooter("Corona Test - Spijkenisse Roleplay")
    
    var vraag3 = new discord.MessageEmbed()
        .setTitle("GGD - Spijkenisse Roleplay")
        .setColor("ORANGE")
        .setDescription("Waarom doe je een sneltest? (bijv. voor een Evenenement of Omdat ik niet staande gehouden wil worden door de Politie en dan een boete krijgen.)")
        .setFooter("Corona Test - Spijkenisse Roleplay")

    var vraag4 = new discord.MessageEmbed()
        .setTitle("GGD - Spijkenisse Roleplay")
        .setColor("ORANGE")
        .setDescription("Heb je mensen die je kunnen bijstaan?")
        .setFooter("Corona Test - Spijkenisse Roleplay")

    var vraag5 = new discord.MessageEmbed()
        .setTitle("GGD - Spijkenisse Roleplay")
        .setColor("ORANGE")
        .setDescription("Heb je klachten? Zoals Hoofdpijn, Misselijkheid, Buikpijn enzovoort?")
        .setFooter("Corona Test - Spijkenisse Roleplay")

    message.channel.send(embed1);
    message.channel.send(vraag1);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();;
        message.channel.send(vraag2);
    
    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();;
        message.channel.send(vraag3);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();;
        message.channel.send(vraag4);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
            var antwoord1 = antwoord.first();;
        message.channel.send(vraag5);
        
    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
            var antwoord3 = antwoord.first();;

            message.channel.bulkDelete(12)

            setTimeout(() => {

                message.channel.send(embed2);

            }, 750);

            setTimeout(() => {

                kanaal.send(uitslag);
        
            }, 60000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 6000);

            setTimeout(() => {

                message.channel.send(embed3);

            }, 6000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 12000);

            setTimeout(() => {

                message.channel.send(embed4);

            }, 12000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 18000);

            setTimeout(() => {

                message.channel.send(embed5);

            }, 18000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 24000);

            setTimeout(() => {

                message.channel.send(embed7);

            }, 24000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 30000);

            setTimeout(() => {

                message.channel.send(embed8);

            }, 30000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 36000);

            setTimeout(() => {

                message.channel.send(embed9);

            }, 36000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 42000);

            setTimeout(() => {

                message.channel.send(embed10);

            }, 42000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 48000);

            setTimeout(() => {

                message.channel.send(embed11);

            }, 48000);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 54000);

            setTimeout(() => {

                message.channel.send(embed12);

            }, 54001);

            setTimeout(() => {

                message.channel.bulkDelete(1)

            }, 60001);

            setTimeout(() => {

                message.channel.send(embed13);

            }, 60001);



                });

            })
        }) 
    })
        })


}

module.exports.help = {
    name: "sneltest",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}