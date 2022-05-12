const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config({ path: "./.env" });
var client_id = process.env.CLIENT_ID;
var token = process.env.TOKEN;

module.exports.commands = function commands() {
    const commands = [
        new SlashCommandBuilder().setName('help').setDescription('Help Menu'),
        new SlashCommandBuilder().setName('cabbage').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('bonk').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('chad').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('gobeyond').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('behorny').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('police').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('sauce').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('nosauce').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('dance').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('kekw').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('ded').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('phproud').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('hug').setDescription('A type of Reaction'),
        new SlashCommandBuilder().setName('cry').setDescription('A type of Reaction')
    ].map(command => command.toJSON());
    const rest = new REST({ version: '9' }).setToken(token);
    rest.put(Routes.applicationCommands(client_id), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
}
