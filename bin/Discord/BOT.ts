var { Client, Intents, MessageEmbed } = require('discord.js');
var client:any = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });

var Reactions = require('./Reactions.js');
var NSFWs = require('./NSFWs.js');
var Information = require('./Information.js');
var Reactions = new Reactions();
var Information = new Information();
var NSFWs = new NSFWs();

module.exports = class BOT implements IBOT{
    run():void {
        // When the client is ready, run this code (only once)
        client.once('ready', () => {
            console.log('Crimbot is ready.');
            client.user.setPresence({ activities: [{ name: 'by myself' }], status: 'online' });
        });
        // Login to Discord with your client's token
        client.login(process.env.TOKEN);
        Reactions.interact(client);
        NSFWs.nhentai(client);
        Information.info(client);
    }
}

interface IBOT {
    run():void;
}