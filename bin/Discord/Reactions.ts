var { Intents, MessageEmbed } = require('discord.js');
var prefix:any = process.env.PREFIX;
var axios:any = require('axios');

module.exports = class Reactions implements IReactions {
    interact(client):void {
            client.on('interactionCreate', async interaction => {
                try {
                if (!interaction.isCommand()) return;
                var { commandName } = interaction;
                if (commandName == 'help') {
                    await interaction.reply('No :P');
                } else if (commandName == 'cabbage') {
                    var cabbage:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/BTziwrQ.jpg");
                    await interaction.reply('cabbage in a nutshell');
                    await interaction.channel.send({ embeds: [cabbage] });
                } else if (commandName == 'bonk') {
                    var message_author:string = interaction.user.username;
                    var mentioned_user:any = interaction.options.getUser('user');
                    var bonk:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setDescription("**" + message_author + "**" + " bonked " + "**" + mentioned_user.username + "**")
                        .setImage("https://i.imgur.com/tpJcScJ.jpg");
                    await interaction.reply("<@" + mentioned_user.id + ">");
                    await interaction.channel.send({ embeds: [bonk] });
                } else if (commandName == 'chad') {
                    var chad:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/y6AOI86.jpg");
                    await interaction.reply('chad like me');
                    await interaction.channel.send({ embeds: [chad] });
                } else if (commandName == 'gobeyond') {
                    var go_beyond:string = "and this is..to go even further beyond" + "\n" + "https://www.youtube.com/watch?v=GxL0HcPQFf0";
                    await interaction.reply(go_beyond);
                } else if (commandName == 'behorny') {
                    var be_horny:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/PggNbRO.jpg");
                    await interaction.reply('Be Honry!');
                    await interaction.channel.send({ embeds: [be_horny] });
                } else if (commandName == 'police') {
                    var police:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/bklAY1q.gif");
                    await interaction.reply('Time to go to jail onii-chan.<3');
                    await interaction.channel.send({ embeds: [police] });
                } else if (commandName == 'sauce') {
                    var sauce:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/QPWxK7p.jpg");
                    await interaction.reply('Sauce pls...');
                    await interaction.channel.send({ embeds: [sauce] });
                } else if (commandName == 'nosauce') {
                    var no_sauce:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/pbuqa1A.jpg");
                    await interaction.reply('Time to go to jail onii-chan.<3');
                    await interaction.channel.send({ embeds: [no_sauce] });
                } else if (commandName == 'dance') {
                    var dance:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/PfwiPvs.gif");
                    await interaction.reply('ey');
                    await interaction.channel.send({ embeds: [dance] });
                } else if (commandName == 'kekw') {
                    var kekw:string = "KEKW" + "\n" + "https://www.youtube.com/watch?v=640UtcpMPJ0";
                    await interaction.reply(kekw);
                } else if (commandName == 'ded') {
                    await interaction.reply("dead, like cabbage's hope and dreams");
                } else if (commandName == 'phproud') {
                    var ph_proud:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/Sl4lcXa.jpg");
                    await interaction.reply('*proud');
                    await interaction.channel.send({ embeds: [ph_proud] });
                } else if (commandName == 'hug') {
                    axios.get("https://api.waifu.pics/sfw/hug")
                        .then(response => {
                            var img_url:string = response.data.url;
                            var img_embed:any = new MessageEmbed()
                                .setColor('#b695ca')
                                .setImage(img_url);

                            interaction.reply('*hug');
                            interaction.channel.send({ embeds: [img_embed] });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else if (commandName == 'cry') {
                    axios.get("https://api.waifu.pics/sfw/cry")
                        .then(response => {
                            var img_url:string = response.data.url;
                            var img_embed:any = new MessageEmbed()
                                .setColor('#b695ca')
                                .setImage(img_url);

                            interaction.reply('*cry');
                            interaction.channel.send({ embeds: [img_embed] });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
                else if (commandName == 'nein') {
                    var nein:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/g9A1gAg.gif");
                    await interaction.reply('NeinNeinNeinNeinNein');
                    await interaction.channel.send({ embeds: [nein] });
                }
                else if (commandName == 'yes') {
                    var yes:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/mqW4rkg.gif");
                    await interaction.reply('YES');
                    await interaction.channel.send({ embeds: [yes] });
                }
                else if (commandName == 'nuke') {
                    var nuke:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/IXcsA7w.gif");
                    await interaction.reply('Trash Deleted From Existence.');
                    await interaction.channel.send({ embeds: [nuke] });
                }
                else if (commandName == 'thicc') {
                    var thicc:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/CDu80mz.jpg");
                    await interaction.reply('Extra THICC');
                    await interaction.channel.send({ embeds: [thicc] });
                }
                else if (commandName == 'amen') {
                    var amen:any = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/VWLccpR.jpg");
                    await interaction.reply('Amen');
                    await interaction.channel.send({ embeds: [amen] });
                }
            } catch (x) {
                await interaction.reply("Something went wrong");
            }
            });
    }
}

interface IReactions{
   interact(client):void;
}