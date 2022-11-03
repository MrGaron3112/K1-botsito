const config = require(`${process.cwd()}/config.json`)

module.exports = client => {
  client.on("messageCreate", async(message) => {

let prefix = config.prefix

    if(!message.guild || !message.channel || !message.author.bot) return;

if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(" ")

const cmd = args.shift()?.toLowerCase()

const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd))
    
if (command) {
  if(command.permisos_bot) {
    if (!message.guild.members.me.permissions.has(command.permisos_bot)) return message.reply(`❌ **no tengo suficientes permisos para ejecutar este comando**`)
  }

  if (command.permisos) {
    if (!message.member.permissions.has(command.permisos)) return message.reply(`❌ **No tienes suficientes permisos psra ejecutar este comando**`)
  }
  command.run(client, message, args, prefix)
} else {
  return message.reply(`❌ **no he encontrado ese comando**`)
}

  })
}