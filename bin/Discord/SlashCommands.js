const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config({ path: "./.env" });
var client_id = process.env.CLIENT_ID;
var token = process.env.TOKEN;

module.exports.commands = function commands() {
    const commands = [
        new SlashCommandBuilder().setName("help").setDescription("Help Menu"),
        new SlashCommandBuilder().setName("cabbage").setDescription("Cabbage Brain Meme."),
        new SlashCommandBuilder().setName("bonk").setDescription("Doge Bonk").addUserOption(option => option.setName('user').setDescription('Bonk a User').setRequired(true)),
        new SlashCommandBuilder().setName("chad").setDescription("Chad."),
        new SlashCommandBuilder().setName("gobeyond").setDescription("A Video of Goku going further beyond."),
        new SlashCommandBuilder().setName("behorny").setDescription("Be supah mega honry."),
        new SlashCommandBuilder().setName("police").setDescription("Call the Police."),
        new SlashCommandBuilder().setName("sauce").setDescription("Ask for the Sauce."),
        new SlashCommandBuilder().setName("nosauce").setDescription("There's no Sauce."),
        new SlashCommandBuilder().setName("dance").setDescription("A GIF of a Dancing Cat."),
        new SlashCommandBuilder().setName("kekw").setDescription("A Video of Resitas Laughing."),
        new SlashCommandBuilder().setName("ded").setDescription("Ded."),
        new SlashCommandBuilder().setName("phproud").setDescription("Proud Filipino."),
        new SlashCommandBuilder().setName("hug").setDescription("Hug a User."),
        new SlashCommandBuilder().setName("cry").setDescription("Cry."),
        new SlashCommandBuilder().setName("nein").setDescription("Nein Cat."),
        new SlashCommandBuilder().setName("he").setDescription("Huehue."),
        new SlashCommandBuilder().setName("yes").setDescription("Spongebob Yes."),
        new SlashCommandBuilder().setName("nuke").setDescription("Nuke."),
        new SlashCommandBuilder().setName("thicc").setDescription("Extra Thicc."),
        new SlashCommandBuilder().setName("amen").setDescription("Amen."),
    ].map(command => command.toJSON());
    const rest = new REST({ version: "9" }).setToken(token);
    rest.put(Routes.applicationCommands(client_id), { body: commands })
        .then(() => console.log("Successfully registered application commands."))
        .catch(console.error);
}
