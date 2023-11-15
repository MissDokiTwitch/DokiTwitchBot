// Load the config file with the login tokens
require("dotenv").config();

// Reserve memory so we can stop the bot later using commands
let discord = 0;

// Load the discord bot backend
const { Client, Events, GatewayIntentBits } = require("discord.js")
let discordClient = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

// Setup the starting message
discordClient.once(Events.ClientReady, discordStarted)
async function discordStarted(){
    console.log("bot activated")
}

// Set up the message listener to trigger the specified function for when the bot receives a message
discordClient.on(Events.MessageCreate, message=>discordMessage(message))
async function discordMessage(message){
    console.log(message.content)
    console.log(message.author.username)
    if (message.content == "!test"){
        message.channel.send("Test completed you dumbass")
    }
}

// Log in the discord bot and save it to the memory for later use or stopping the bot
discord = discordClient.login(process.env.DISCORD)