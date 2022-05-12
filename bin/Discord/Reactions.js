var { Intents, MessageEmbed } = require('discord.js');
var prefix = process.env.PREFIX;
var axios = require('axios');

module.exports = class Reactions {
    interact(client) {
        try {
            client.on('interactionCreate', async interaction => {
                if (!interaction.isCommand()) return;
                var { commandName } = interaction;
                if (commandName == 'help') {
                    await interaction.reply('No :P');
                } else if (commandName == 'cabbage') {
                    var cabbage = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/BTziwrQ.jpg");
                    await interaction.reply('cabbage in a nutshell');
                    await interaction.channel.send({ embeds: [cabbage] });
                } else if (commandName == 'bonk') {
                    var bonk = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/tpJcScJ.jpg");
                    await interaction.reply('*bonk');
                    await interaction.channel.send({ embeds: [bonk] });
                } else if (commandName == 'chad') {
                    var chad = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/y6AOI86.jpg");
                    await interaction.reply('chad like me');
                    await interaction.channel.send({ embeds: [chad] });
                } else if (commandName == 'gobeyond') {
                    var go_beyond = "and this is..to go even further beyond" + "\n" + "https://www.youtube.com/watch?v=GxL0HcPQFf0";
                    await interaction.reply(go_beyond);
                } else if (commandName == 'behorny') {
                    var be_horny = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/PggNbRO.jpg");
                    await interaction.reply('Be Honry!');
                    await interaction.channel.send({ embeds: [be_horny] });
                } else if (commandName == 'police') {
                    var police = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/bklAY1q.gif");
                    await interaction.reply('Time to go to jail onii-chan.<3');
                    await interaction.channel.send({ embeds: [police] });
                } else if (commandName == 'sauce') {
                    var sauce = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/QPWxK7p.jpg");
                    await interaction.reply('Sauce pls...');
                    await interaction.channel.send({ embeds: [sauce] });
                } else if (commandName == 'nosauce') {
                    var no_sauce = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/pbuqa1A.jpg");
                    await interaction.reply('Time to go to jail onii-chan.<3');
                    await interaction.channel.send({ embeds: [no_sauce] });
                } else if (commandName == 'dance') {
                    var dance = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/PfwiPvs.gif");
                    await interaction.reply('ey');
                    await interaction.channel.send({ embeds: [dance] });
                } else if (commandName == 'kekw') {
                    var kekw = "KEKW" + "\n" + "https://www.youtube.com/watch?v=640UtcpMPJ0";
                    await interaction.reply(kekw);
                } else if (commandName == 'ded') {
                    await interaction.reply("dead, like cabbage's hope and dreams");
                } else if (commandName == 'phproud') {
                    var ph_proud = new MessageEmbed()
                        .setColor('#b695ca')
                        .setImage("https://i.imgur.com/Sl4lcXa.jpg");
                    await interaction.reply('*proud');
                    await interaction.channel.send({ embeds: [ph_proud] });
                } else if (commandName == 'hug') {
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
                } else if (commandName == 'cry') {
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
            });
            client.on('messageCreate', async message => {
                try {
                    if (message.content == prefix + "bonk") {
                        var message_author = message.author.username;
                        var mentioned_user = message.mentions.repliedUser.username;
                        var reply_bonk = new MessageEmbed()
                            .setColor('#b695ca')
                            .setDescription("**" + message_author + "**" + " bonked " + "**" + mentioned_user + "**")
                            .setImage("https://i.imgur.com/tpJcScJ.jpg");

                        message.channel.send({ embeds: [reply_bonk] });;
                    }
                } catch (x) {
                    message.reply("Something went wrong")
                }
            });
        } catch {
            message.reply("Something went wrong")
        }
    }
}







