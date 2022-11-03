module.exports = client => {
  client.on("ready", async () => {
    console.log(`${client.user.tag} esta listo`.blue)
  })
}