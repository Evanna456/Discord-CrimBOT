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
            } else if (commandName == 'sace') {
                await interaction.reply('Time to go to jail onii-chan.<3');
                await interaction.channel.send({ embeds: [police()] });
            }
        } catch {
            interaction.reply('Something went wrong');
        }
    });

    client.on('messageCreate', async message => {
        try {
            if (message.content == prefix + "bonk") {
                var reply_bonk = replyBonk(message);
                await message.channel.send({ embeds: [reply_bonk] });;
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




