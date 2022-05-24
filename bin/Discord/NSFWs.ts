var { Intents, MessageEmbed } = require('discord.js');
var prefix:any = process.env.PREFIX;

module.exports = class Information implements INSFWs {
    nhentai(client):void {
        client.on('messageCreate', async message => {
            try {
                if (message.channel.nsfw == true) {
                    if (isNaN(message.content) == false && message.content.length >= 5 && message.content.length <= 6) {
                        var number:string = message.content;
                        var nhentai_link:string = "https://nhentai.net/g/" + number + "/";
                        message.channel.send(nhentai_link);
                    }
                }
            } catch(x) {
                message.channel.send('Something went wrong');
            }
        });
    }
}

interface INSFWs {
    nhentai(client):void;
}
