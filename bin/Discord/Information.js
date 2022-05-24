"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var { Intents, MessageEmbed } = require('discord.js');
var prefix = process.env.PREFIX;
var google_search_api_key = process.env.GOOGLE_SEARCH_API_KEY;
var axios = require('axios');
module.exports = class Information {
    info(client) {
        client.on('messageCreate', (message) => __awaiter(this, void 0, void 0, function* () {
            try {
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
                        }
                        else {
                            var search_result = "There are no search results";
                            message.channel.send(search_result);
                        }
                    })
                        .catch(error => {
                        console.log(error);
                    });
                }
                else if (message_content.includes("https://discord.com/channels/") == true) {
                    var discord_message_ids = message_content.slice(29, message_length);
                    var discord_message_id_array = discord_message_ids.split("/");
                    client.channels.fetch(discord_message_id_array[1])
                        .then(channel => channel.messages.fetch(discord_message_id_array[2])
                        .then(message => {
                        if (message.content.length != 0 && message.attachments.size == 0 && message.author.bot == false) {
                            var message_content = message.content;
                            var message_author = message.author.username;
                            var message_created = message.createdAt.toString();
                            messageLink(message_content, message_author, message_created);
                        }
                    })
                        .catch());
                }
                function messageLink(message_content, message_author, message_created) {
                    var message_embed = new MessageEmbed()
                        .setColor('#b695ca')
                        .setDescription(message_content)
                        .setAuthor(message_author + " posted")
                        .setFooter(message_created);
                    message.channel.send({ embeds: [message_embed] });
                }
            }
            catch (_a) {
                message.channel.send("Something went wrong");
            }
        }));
    }
};
