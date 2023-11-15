console.log("anything");

function name(n){
console.log(n)
}

name("this is a text")

require("dotenv").config();
const dotenv = process.env;
let discord = 0;
console.log(process.env.DISCORD)
const { Client, Events, GatewayIntentBits } = require("discord.js")
var discordclient = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});
discordclient.once(Events.ClientReady, discordstarted)
function discordstarted(){
    console.log("bot activated")
}
discordclient.on(Events.MessageCreate, message=>discordmessage)
function discordmessage(message){
    console.log(message)
}