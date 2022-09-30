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
module.exports = class Information {
    nhentai(_client) {
        _client.on('messageCreate', (message) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (message.channel.nsfw == true) {
                    if (isNaN(message.content) == false && message.content.length >= 5 && message.content.length <= 6) {
                        var number = message.content;
                        var nhentai_link = "https://nhentai.net/g/" + number + "/";
                        message.channel.send(nhentai_link);
                    }
                }
            }
            catch (x) {
                message.channel.send('Something went wrong');
            }
        }));
    }
};
