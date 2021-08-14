var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Butonlardaki Hesapları Takip Ediniz...",
assets : {
large_image : "ga",
large_text : "Game Arena" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Instagram" , url : "https://www.instagram.com/game.arena0/?hl=tr"},{label : "Discord",url : "https://discord.gg/xQkqb77kNA"}]
}
})
})
client.login({ clientId : "875933702893498389" }).catch(console.error);