const { EmbedBuilder } = require("discord.js")
const { stripIndent } = require("common-tags")

module.exports = {
  name: `ping`,
  description: `obten mi latencia`,
  PermsBot: [`SendMessages`],
  PermsUser: [],
  run: async (client, interaction, args) => {
const E = new EmbedBuilder()
    .setTitle('!pong!')
    .setDescription(`❤️ mi ping es ${client.ws.ping}ms`)
    .setColor(client.color)
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())

    interaction.followUp({
      content: null,
      embeds: [E]
    })
}
}