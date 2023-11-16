// Load the config file with the login tokens
require("dotenv").config();

////////////
// Memory //
////////////

// Bot storage
let discord = 0;

/////////////
// DISCORD //
/////////////

// Load the discord bot backend
const { Client, Events, GatewayIntentBits } = require("discord.js");
let discordClient = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Set up the event listeners
discordClient.once(Events.ClientReady, discordStarted);
discordClient.on(Events.MessageCreate, message => discordMessage(message));

// Implement the message event functionality
async function discordMessage(message) {
    console.log(message.content);
    console.log(message.author.username);
    if (message.content == "!test") {
        message.channel.send("Executed test command");
    }
}

// Implement discord bot startup event functionality
async function discordStarted() {
    console.log("Discord bot has been activated");
}

// Log in the discord bot and save it to the memory for later use or stopping the bot
discord = discordClient.login(process.env.DISCORD);