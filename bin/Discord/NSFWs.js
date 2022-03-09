var { Intents, MessageEmbed } = require('discord.js');
var prefix = process.env.PREFIX;

module.exports.nsfw = function nsfw(client) {

    client.on('messageCreate', async message => {
        try {
            if (message.channel.nsfw = true) {
                if (isNaN(message.content) == false && message.content.length >= 5 && message.content.length <= 6) {
                    nhentai(message);
                }
            }
        } catch {
            message.channel.send('Something went wrong');
        }
    });

}

function nhentai(message) {
    var number = message.content;
    var nhentai_link = "https://nhentai.net/g/" + number + "/";
    message.channel.send(nhentai_link);
}