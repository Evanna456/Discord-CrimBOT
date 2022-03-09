var { Client, Intents, MessageEmbed } = require('discord.js');
var client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });
var prefix = process.env.PREFIX;
var Reactions = require('./Reactions.js');
var NSFWs = require('./NSFWs.js');
var Information = require('./Information.js');

module.exports.run = function run() {

    // When the client is ready, run this code (only once)
    client.once('ready', () => {
        console.log('Crimbot is ready.');
        client.user.setPresence({ activities: [{ name: 'by myself' }], status: 'online' });
    });

    // Login to Discord with your client's token
    client.login(process.env.TOKEN);

    Reactions.reaction(client);
    NSFWs.nsfw(client);
    Information.information(client);

}