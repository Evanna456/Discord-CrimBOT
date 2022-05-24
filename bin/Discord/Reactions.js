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
var axios = require('axios');
module.exports = class Reactions {
    interact(client) {
        client.on('interactionCreate', (interaction) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!interaction.isCommand())
                    return;
                var { commandName } = interaction;
                if (commandName == 'help') {
                    yield interaction.reply('No :P');
                }
                else if (commandName == 'cabbage') {
                    var cabbage = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/BTziwrQ.jpg");
                    yield interaction.reply('cabbage in a nutshell');
                    yield interaction.channel.send({ embeds: [cabbage] });
                }
                else if (commandName == 'bonk') {
                    var message_author = interaction.user.username;
                    var mentioned_user = interaction.options.getUser('user');
                    var bonk = new MessageEmbed()
                        .setColor('#b695ca')
                        .setDescription("**" + message_author + "**" + " bonked " + "**" + mentioned_user.username + "**")
                        .setImage("https://i.imgur.com/tpJcScJ.jpg");
                    yield interaction.reply("<@" + mentioned_user.id + ">");
                    yield interaction.channel.send({ embeds: [bonk] });
                }
                else if (commandName == 'chad') {
                    var chad = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/y6AOI86.jpg");
                    yield interaction.reply('chad like me');
                    yield interaction.channel.send({ embeds: [chad] });
                }
                else if (commandName == 'gobeyond') {
                    var go_beyond = "and this is..to go even further beyond" + "\n" + "https://www.youtube.com/watch?v=GxL0HcPQFf0";
                    yield interaction.reply(go_beyond);
                }
                else if (commandName == 'behorny') {
                    var be_horny = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/PggNbRO.jpg");
                    yield interaction.reply('Be Honry!');
                    yield interaction.channel.send({ embeds: [be_horny] });
                }
                else if (commandName == 'police') {
                    var police = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/bklAY1q.gif");
                    yield interaction.reply('Time to go to jail onii-chan.<3');
                    yield interaction.channel.send({ embeds: [police] });
                }
                else if (commandName == 'sauce') {
                    var sauce = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/QPWxK7p.jpg");
                    yield interaction.reply('Sauce pls...');
                    yield interaction.channel.send({ embeds: [sauce] });
                }
                else if (commandName == 'nosauce') {
                    var no_sauce = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/pbuqa1A.jpg");
                    yield interaction.reply('Time to go to jail onii-chan.<3');
                    yield interaction.channel.send({ embeds: [no_sauce] });
                }
                else if (commandName == 'dance') {
                    var dance = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/PfwiPvs.gif");
                    yield interaction.reply('ey');
                    yield interaction.channel.send({ embeds: [dance] });
                }
                else if (commandName == 'kekw') {
                    var kekw = "KEKW" + "\n" + "https://www.youtube.com/watch?v=640UtcpMPJ0";
                    yield interaction.reply(kekw);
                }
                else if (commandName == 'ded') {
                    yield interaction.reply("dead, like cabbage's hope and dreams");
                }
                else if (commandName == 'phproud') {
                    var ph_proud = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/Sl4lcXa.jpg");
                    yield interaction.reply('*proud');
                    yield interaction.channel.send({ embeds: [ph_proud] });
                }
                else if (commandName == 'hug') {
                    axios.get("https://api.waifu.pics/sfw/hug")
                        .then(response => {
                        var img_url = response.data.url;
                        var img_embed = new MessageEmbed()
                            .setColor('#b695ca')
                            .setImage(img_url);
                        interaction.reply('*hug');
                        interaction.channel.send({ embeds: [img_embed] });
                    })
                        .catch(error => {
                        console.log(error);
                    });
                }
                else if (commandName == 'cry') {
                    axios.get("https://api.waifu.pics/sfw/cry")
                        .then(response => {
                        var img_url = response.data.url;
                        var img_embed = new MessageEmbed()
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
                    var nein = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/g9A1gAg.gif");
                    yield interaction.reply('NeinNeinNeinNeinNein');
                    yield interaction.channel.send({ embeds: [nein] });
                }
                else if (commandName == 'yes') {
                    var yes = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/mqW4rkg.gif");
                    yield interaction.reply('YES');
                    yield interaction.channel.send({ embeds: [yes] });
                }
                else if (commandName == 'nuke') {
                    var nuke = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/IXcsA7w.gif");
                    yield interaction.reply('Trash Deleted From Existence.');
                    yield interaction.channel.send({ embeds: [nuke] });
                }
                else if (commandName == 'thicc') {
                    var thicc = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/CDu80mz.jpg");
                    yield interaction.reply('Extra THICC');
                    yield interaction.channel.send({ embeds: [thicc] });
                }
                else if (commandName == 'amen') {
                    var amen = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/VWLccpR.jpg");
                    yield interaction.reply('Amen');
                    yield interaction.channel.send({ embeds: [amen] });
                }
            }
            catch (x) {
                yield interaction.reply("Something went wrong");
            }
        }));
    }
};
