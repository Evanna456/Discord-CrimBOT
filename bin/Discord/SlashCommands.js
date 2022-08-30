const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config({ path: "./.env" });
var client_id = process.env.CLIENT_ID;
var token = process.env.TOKEN;

module.exports.commands = function commands() {
    const commands = [
        new SlashCommandBuilder().setName("help").setDescription("Help Menu"),
    ].map(command => command.toJSON());
    const rest = new REST({ version: "9" }).setToken(token);
    rest.put(Routes.applicationCommands(client_id), { body: commands })
        .then(() => console.log("Successfully registered application commands."))
        .catch(console.error);
}
