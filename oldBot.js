const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => { // Shit to be spammed in Console upon launch.
    console.log('====================================================================================================')
    console.log('Logged in as McZarya');
    console.log('====================================================================================================')
    console.log("McZarya's V-Bucks Dealer V1.1.0");
    console.log("Created By Reflux Software Developments And Developed By McZarya.")
    console.log("Reflux Software Developments or its employees not responsible for anything you do with this bot.")
    console.log('====================================================================================================')
    console.log('"V-Bucks" Ready For Distribution');
    console.log('====================================================================================================')
    
    client.user.setStatus('dnd') //Bot's status and game/streaming
    client.user.setPresence({
        game: {
            name: 'To Police Scanners ',
            type: "Listening",
			// url: "URL Here" <- link for stream when using the 'STREAMING' status
        }
    });
});

    client.on('message', message => { // Check The Bots Connectivity
	if (message.content === "Uh my head... What happened...") { 
        message.channel.send("Hey, you. You're finally awake. You were trying to cross the border, right? Walked right into that Imperial ambush, same as us,")
	}
});


    client.on('message', message => { // I absalutly despise that I put this in here
	if (message.content === "!instabio") { 
        message.channel.send("🌷12🌷 🥀Depressed🥀 🕷Suisidal🕷 🐺Half wolf🐺 😈Half deamon😈 💦Honrey💦 🖤𝓲'𝓶 𝓷𝓸𝓽 𝓵𝓲𝓴𝓮 𝓽𝓱𝓮 𝓸𝓽𝓱𝓮𝓻 𝓰𝓲𝓻𝓵𝓼🖤")
	}
});

client.on('message', message => {
	if (message.content === '!vb') { // Scans Discord Servers it's in for this meassage 
        message.channel.send("Psst, " + message.author.username + " I heard you were looking for some V-Bucks "); // When It hears the prefix execute's this message
            message.channel.send("Come With Me"); // Used to proc next module 
	}
});

client.on('message', message => {
    if (message.content === 'Come With Me') { /* Used to add the reaction. Spent like 30 minutes trying to figure out why this didnt proc,
 and it was all because Discord DELETED ONE FUCKING SPACE! */
            message.react('✅');
	}
});

client.login('NzQyMjU1MTI3NzAzOTc3OTkz.XzDc9A.S8iWE4MwTxUQYrmbmtLs0wpAS0k');