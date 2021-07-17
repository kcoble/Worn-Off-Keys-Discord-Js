const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

// variables
const client = new DiscordJS.Client()
const TOKEN = process.env.TOKEN;
const MONGO_URI = process.env.MONGO_URI;

client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: 'commands',
    showWarns: false,
  }).setMongoPath(process.env.MONGO_URI)
})

client.login(process.env.TOKEN)
