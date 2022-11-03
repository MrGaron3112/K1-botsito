const fs = require("fs")
const Commands = []

module.exports = client => {

  try {
    let comandos = 0;

    const commandFolders = fs.readdirSync(`./slash_commands`)
    for(const folder of commandFolders) {
const commandFiles = fs.readdirSync(`./slash_commands/${folder}`).filter((file) => file.endsWith(`.js`))
for(const file of commandFiles) {
  const command = require(`../slash_commands/${folder}/${file}`)
if(command.name) {
  client.slashCommands.set(command.name, command)
comandos++;
  Commands.push(command)
} else {
  continue;
}
}
    }
    client.on(`ready`, async () => {
      client.application.commands.set(Commands)
      console.log(`total de comandos de barra cargados = ${comandos}`.cyan)
    })
  }catch(e) {
console.log(e)
}
}