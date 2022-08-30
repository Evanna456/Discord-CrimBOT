var { Intents, MessageEmbed } = require('discord.js');
var prefix:any = process.env.PREFIX;
var google_search_api_key:any = process.env.GOOGLE_SEARCH_API_KEY;
var axios:any = require('axios');

module.exports = class Information implements IInformation {
    info(client):void {
            client.on('messageCreate', async message => {
                try {
                var message_content:string = message.content;
                var message_length:number = message_content.length;
                var prefix_length:number = prefix.length;
                var command_length:number = prefix_length + 2;
                var command_position:number = message_content.indexOf(prefix + "g/");
                var command_end:number = command_position + command_length;
                var search: string = message_content.slice(command_end, message_length);
                var search_trigger: string = message_content.slice(command_position, command_end);
                if (search_trigger == prefix + "g/") {
                    axios.get("https://www.googleapis.com/customsearch/v1?key=" + google_search_api_key + "&q=" + search)
                        .then(response => {
                            if (response.data.searchInformation.totalResults != 0) {
                                var search_result:string = '**' + response.data.items[0].title + '**' + '\n' + '"' + response.data.items[0].snippet + '"' + '\n' + response.data.items[0].link;
                                message.channel.send(search_result);
                            } else {
                                var search_result:string = "There are no search results";
                                message.channel.send(search_result);
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else if (message_content.includes("https://discord.com/channels/") == true) {
                    var discord_message_ids:string = message_content.slice(29, message_length);
                    var discord_message_id_array:Array<string> = discord_message_ids.split("/");
                    client.channels.fetch(discord_message_id_array[1])
                        .then(channel =>
                            channel.messages.fetch(discord_message_id_array[2])
                                .then(message => {
                                    if (message.content.length != 0 && message.attachments.size == 0 && message.author.bot == false) {
                                        var message_content:string = message.content;
                                        var message_author:string = message.author.username;
                                        var message_created:string = message.createdAt.toString();
                                        messageLink(message_content, message_author, message_created);
                                    }
                                })
                                .catch());
                }
                function messageLink(message_content:string, message_author:string, message_created:string) {
                    var message_embed = new MessageEmbed()
                        .setColor('#b695ca')
                        .setDescription(message_content)
                        .setAuthor(message_author + " posted")
                        .setFooter(message_created);
                    message.channel.send({ embeds: [message_embed] });
                }
            } catch {
                message.channel.send("Something went wrong");
             }
            });
    }
}

interface IInformation {
    info(client):void;
}
