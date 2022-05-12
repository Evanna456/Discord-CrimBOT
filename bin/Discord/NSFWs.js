var { Intents, MessageEmbed } = require('discord.js');
var prefix = process.env.PREFIX;

module.exports = class Information {
    nhentai(client) {
        client.on('messageCreate', async message => {
            try {
                if (message.channel.nsfw == true) {
                    if (isNaN(message.content) == false && message.content.length >= 5 && message.content.length <= 6) {
                        var number = message.content;
                        var nhentai_link = "https://nhentai.net/g/" + number + "/";
                        message.channel.send(nhentai_link);
                    }
                }
            } catch {
                message.channel.send('Something went wrong');
            }
        });
    }
}
