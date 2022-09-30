"use strict";
var { Client, Intents, MessageEmbed } = require('discord.js');
var _client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });
var Reactions = require('./Reactions.js');
var NSFWs = require('./NSFWs.js');
var Information = require('./Information.js');
var _reactions = new Reactions();
var _information = new Information();
var _nsfw = new NSFWs();
module.exports = class BOT {
    run() {
        // When the client is ready, run this code (only once)
        _client.once('ready', () => {
            console.log('Crimbot is ready.');
            _client.user.setPresence({ activities: [{ name: 'by myself' }], status: 'online' });
        });
        // Login to Discord with your client's token
        _client.login(process.env.TOKEN);
        _reactions.interact(_client);
        _nsfw.nhentai(_client);
        _information.info(_client);
    }
};
