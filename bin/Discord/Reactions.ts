var { Intents, MessageEmbed } = require('discord.js');
var axios = require('axios');
var prefix:any = process.env.PREFIX;

module.exports = class Reactions implements IReactions {
    interact(_client):void {
            _client.on('interactionCreate', async interaction => {
                try {
                if (!interaction.isCommand()) return;
                var { commandName } = interaction;
                if (commandName == 'help') {
                    var _help = new MessageEmbed()
                    .setDescription("I am a DiscordBOT")
                    .setColor('#b695ca')
                    .setThumbnail('https://i.imgur.com/4bT7j0O.png')
                    .addFields(
                        { name: 'Reactions', value: '/reactions', inline: true },
                        { name: 'Information', value: '/information', inline: true },
                        { name: 'NSFW', value: '/nsfw', inline: true },
                    );
                    await interaction.reply(_help);
                }
            } catch (e) {
                await interaction.reply("Something went wrong");
            }
            });

            _client.on('messageCreate', async message => {
                try {
                } catch(e) {
                    message.channel.send("Something went wrong");
                }
                    var message_content:string = message.content;
                     
                    if(message_content == prefix + "gobeyond"){
                        var go_beyond:string = "and this is..to go even further beyond" + "\n" + "https://www.youtube.com/watch?v=GxL0HcPQFf0";
                        message.channel.send(go_beyond);
                    }else if(message_content == prefix + "kekw"){
                        var kekw:string = "KEKW" + "\n" + "https://www.youtube.com/watch?v=640UtcpMPJ0";
                        message.channel.send(kekw);
                    }else if(message_content == prefix + "behorny"){
                        var be_horny = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/PggNbRO.jpg");
                        message.channel.send({ embeds: [be_horny] });
                    }else if(message_content == prefix + "bonk"){
                        if(message.mentions.members.first() == null){
                        var bonk = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/tpJcScJ.jpg");
                        message.channel.send({ embeds: [bonk] });
                        }else{
                            var mentioned_user = message.mentions.repliedUser.username;
                            var message_author = message.author.username;
                            var bonk = new MessageEmbed()
                            .setColor('#b695ca')
                            .setDescription("**" + message_author + "**" + " bonked " + "**" + mentioned_user + "**")
                            .setImage("https://i.imgur.com/tpJcScJ.jpg");
                            message.channel.send({ embeds: [bonk] });
                        }
                    }else if(message_content == prefix + "hug"){  
                        if(message.mentions.members.first() == null){        
                        axios.get("https://api.waifu.pics/sfw/hug")
                        .then(response => {
                            var img_url:string = response.data.url;
                            var img_embed = new MessageEmbed()
                                .setColor('#b695ca')
                                .setImage(img_url);
                                message.channel.send({ embeds: [img_embed] });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                        }else{
                            var mentioned_user = message.mentions.repliedUser.username;
                            var message_author = message.author.username;
                            axios.get("https://api.waifu.pics/sfw/hug")
                            .then(response => {
                                var img_url:string = response.data.url;
                                var img_embed = new MessageEmbed()
                                    .setColor('#b695ca')
                                    .setDescription("**" + message_author + "**" + " hugged " + "**" + mentioned_user + "**")
                                    .setImage(img_url);
                                    message.channel.send({ embeds: [img_embed] });
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        }
                    }else if(message_content == prefix + "nein"){          
                        var nein = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/g9A1gAg.gif");
                         message.channel.send({ embeds: [nein] });
                    }else if(message_content == prefix + "thicc"){          
                        var thicc = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/CDu80mz.jpg");
                         message.channel.send({ embeds: [thicc] });
                    }else if(message_content == prefix + "yes"){          
                        var yes = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/mqW4rkg.gif");
                         message.channel.send({ embeds: [yes] });
                    }
            });
    }
}

interface IReactions{
   interact(_client):void;
}