var { Intents, MessageEmbed } = require('discord.js');
var prefix = process.env.PREFIX;

module.exports.reaction = function reaction(client) {
    client.on('interactionCreate', async interaction => {
        try {
            if (!interaction.isCommand()) return;
            var { commandName } = interaction;
            if (commandName == 'help') {
                await interaction.reply('No :P');
            } else if (commandName == 'cabbage') {
                await interaction.reply('cabbage in a nutshell');
                await interaction.channel.send({ embeds: [cabbage()] });
            } else if (commandName == 'bonk') {
                await interaction.reply('bonk');
                await interaction.channel.send({ embeds: [bonk()] });
            } else if (commandName == 'chad') {
                await interaction.reply('chad like me');
                await interaction.channel.send({ embeds: [chad()] });
            } else if (commandName == 'gobeyond') {
                await interaction.reply(goBeyond());
            } else if (commandName == 'behorny') {
                await interaction.reply('Be Honry!');
                await interaction.channel.send({ embeds: [beHorny()] });
            } else if (commandName == 'police') {
                await interaction.reply('Time to go to jail onii-chan.<3');
                await interaction.channel.send({ embeds: [police()] });
            } else if (commandName == 'sauce') {
                await interaction.reply('Sauce pls...');
                await interaction.channel.send({ embeds: [sauce()] });
            } else if (commandName == 'nosauce') {
                await interaction.reply('Time to go to jail onii-chan.<3');
                await interaction.channel.send({ embeds: [noSauce()] });
            } else if (commandName == 'dance') {
                await interaction.reply('ey');
                await interaction.channel.send({ embeds: [dance()] });
            } else if (commandName == 'kekw') {
                await interaction.reply(kekw());
            } else if (commandName == 'ded') {
                await interaction.reply("dead, like cabbage's hope and dreams");
            } else if (commandName == 'phproud') {
                await interaction.reply('*proud');
                await interaction.channel.send({ embeds: [phProud()] });
            } else if (commandName == 'hug') {
                await interaction.reply('*hug');
                await interaction.channel.send({ embeds: [hug()] });
            }
        } catch {
            interaction.reply('Something went wrong');
        }
    });

    client.on('messageCreate', async message => {
        try {
            if (message.content == prefix + "bonk") {
                var reply_bonk = replyBonk(message);
                message.channel.send({ embeds: [reply_bonk] });;
            }
        } catch {
            message.reply("Something went wrong")
        }
    });

}

function cabbage() {
    var cabbage = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/BTziwrQ.jpg");
    return cabbage;
}

function bonk() {
    var bonk = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/tpJcScJ.jpg");

    return bonk;
}

function replyBonk(message) {
    try {
        var message_author = message.author.username;
        var mentioned_user = message.mentions.repliedUser.username;
        var reply_bonk = new MessageEmbed()
            .setColor('#b695ca')
            .setDescription("**" + message_author + "**" + " bonked " + "**" + mentioned_user + "**")
            .setImage("https://i.imgur.com/tpJcScJ.jpg");

        return reply_bonk;
    } catch {
        var reply_bonk = bonk();
        return reply_bonk;
    }
}

function chad() {
    var chad = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/y6AOI86.jpg");
    return chad;
}

function goBeyond() {
    var gobeyond = "and this is..to go even further beyond" + "\n" + "https://www.youtube.com/watch?v=GxL0HcPQFf0";
    return gobeyond;
}

function beHorny() {
    var be_horny = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/PggNbRO.jpg");
    return be_horny;
}

function police() {
    var police = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/bklAY1q.gif");
    return police;
}

function sauce() {
    var sauce = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/QPWxK7p.jpg");
    return sauce;
}

function noSauce() {
    var nosauce = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/pbuqa1A.jpg");
    return nosauce;
}

function dance() {
    var dance = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/PfwiPvs.gif");
    return dance;
}

function kekw() {
    var kekw = "KEKW" + "\n" + "https://www.youtube.com/watch?v=640UtcpMPJ0";
    return kekw;
}

function phProud() {
    var phproud = new MessageEmbed()
        .setColor('#b695ca')
        .setImage("https://i.imgur.com/Sl4lcXa.jpg");
    return phproud;
}

function hug() {
    axios.get("https://api.waifu.pics/sfw/hug")
        .then(response => {

            var img_url = response.data.url;

            var img_embed = new MessageEmbed()
                .setColor('#b695ca')
                .setImage(img_url);

            return img_embed;

        })
        .catch(error => {
            console.log(error);
        });

}




