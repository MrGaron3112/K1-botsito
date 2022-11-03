const { Client, Partials, GatewayIntentBits, Collection } = require("discord.js")
const config = require("./config.json")
const fs = require("fs")
const colors = require("colors")
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.User,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Message
  ]
})

// colecciones
client.commands = new Collection();
client.slashCommands = new Collection();
client.color = config.color

// leer handlers
fs.readdirSync(`./handlers`).forEach(File => {
  require(`./handlers/${File}`)(client)
})

client.login(config.token)

const express = require("express")
const app = express()

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
console.log(`web lista en el puerto`, app.get('port'))
})