module.exports = client => {
    client.on(`interactionCreate`, async interaction => {
if(interaction.isCommand()) {
  await interaction.deferReply({ ephemeral: false }).catch(() => {})
const cmd = client.slashCommands.get(interaction.commandName)
  if(!cmd) return interaction.followUp({
    content: `Error!!`
  })
  if(cmd.PermsUser) {
if(!client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id).permissions.has(cmd.PermsUser || [])) return interaction.followUp({
  content: `No tienes permisos para ejecutar este comando!\nPermisos necesarios: \` ${cmd.PermsUser} \``
})
}
if(cmd.PermsBot) {
if(!client.guilds.cache.get(interaction.guild.id).members.cache.get(client.user.id).permissions.has(cmd.PermsBot || [])) {
  return interaction.followUp({
    content: `No tengo suficientes permisos para ejecutar este comandos\nPermisos necesarios \` ${cmd.PermsBot} \``
  })
}
}
  const args = [];
  try {
    cmd.run(client, interaction, args)
  }catch(e) {
interaction.followUp({
  content: e.message
})
    console.log(`[error en] =`.cyan + `${e.stack}`.red)
}
}
})
  }