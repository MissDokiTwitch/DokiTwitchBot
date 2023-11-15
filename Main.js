require("dotenv").config();
const dotenv = process.env;
let discord = 0;
console.log(process.env.DISCORD)
const { Client, Events, GatewayIntentBits } = require("discord.js")
var discordclient = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});
discordclient.once(Events.ClientReady, discordstarted)
async function discordstarted(){
    console.log("bot activated")
}
discordclient.on(Events.MessageCreate, message=>discordmessage(message))
async function discordmessage(message){
    console.log(message.content)
    console.log(message.author.username)
    if (message.content == "!test"){
        message.channel.send("Test completed you dumbass")
    }
}
discord = discordclient.login(process.env.DISCORD)