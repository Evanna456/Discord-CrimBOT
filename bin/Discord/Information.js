var { Intents, MessageEmbed } = require('discord.js');
var prefix = process.env.PREFIX;
var google_search_api_key = process.env.GOOGLE_SEARCH_API_KEY;
var axios = require('axios');
var cheerio = require('cheerio');

module.exports = class Information {
    info(client) {
        try {
            client.on('messageCreate', async message => {
                var message_content = message.content;
                var message_length = message_content.length;
                var prefix_length = prefix.length;
                var command_length = prefix_length + 2;
                var command_position = message_content.indexOf(prefix + "g?");
                var command_end = command_position + command_length;
                var search = message_content.slice(command_position, message_length);
                var search_trigger = message_content.slice(command_position, command_end);
                if (search_trigger == prefix + "g?") {
                    axios.get("https://www.googleapis.com/customsearch/v1?key=" + google_search_api_key + "&q=" + search)
                        .then(response => {
                            if (response.data.searchInformation.totalResults != 0) {
                                var search_result = '**' + response.data.items[0].title + '**' + '\n' + '"' + response.data.items[0].snippet + '"' + '\n' + response.data.items[0].link;
                                message.channel.send(search_result);
                            } else {
                                var search_result = "There are no search results";
                                message.channel.send(search_result);
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else if (message_content.includes("https://discord.com/channels/") == true) {
                    var discord_message_ids = message_content.slice(29, message_length);
                    var discord_message_id_array = discord_message_ids.split("/");
                    client.channels.fetch(discord_message_id_array[1])
                        .then(channel =>
                            channel.messages.fetch(discord_message_id_array[2])
                                .then(message => {
                                    if (message.attachments.size == 0 && message.embeds.length == 0) {
                                        var message_content = message.content;
                                        messageLink(message_content);
                                    }
                                })
                                .catch(message.channel.send("Something went wrong")));
                }
                function messageLink(message_content) {
                    message.channel.send(message_content);
                }
            });
        } catch {
            message.channel.send("Something went wrong");
        }
    }
}

