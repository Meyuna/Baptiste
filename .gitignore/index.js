const Discord = require("discord.js")
const bot = new Discord.Client()

function emoji (id) {
    return client.emojis.get(id).toString();
}

bot.on('ready', function () {
    bot.user.setActivity('Vide bal sou yo')
})
    
bot.on ('message', function (message) {
    if (message.content === "!baptiste") {
        message.channel.send('Vide tes balles sous l\'eau!', {
            tts: true
})
        message.delete('!baptiste')
    }
// ICI POUR LE CODE DES EMOJI
if (message.content === "!baptiste") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send('<:meyu_bapt1:591305831040155709> <:meyu_bapt2:591305832172617740>');
  }
})
bot.login('NTkxNzcwMjc3NjU1MDg1MDU2.XQ1nPA.pgKECc868rVlhHStPTllEqUwLa4')
