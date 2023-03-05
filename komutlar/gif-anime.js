const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711485849337856/1081982208543293500/B6BB2F7C-DCFC-4C81-88E1-8BA91FD61CB8.gif","https://media.discordapp.net/attachments/608711485849337856/1081635747234316339/a8b5c8cf7b47342a176133adcc5d604e.gif","https://media.discordapp.net/attachments/608711485849337856/1081635472876511363/hnt.gif","https://media.discordapp.net/attachments/608711485849337856/1081617473364820148/itachi_katon.gif","https://media.discordapp.net/attachments/608711485849337856/1081617139284328528/1bbeef996ce2aaf128877713c2f07bd4.gif","https://media.discordapp.net/attachments/608711485849337856/1080943749795942410/IMG_4693.gif","https://media.discordapp.net/attachments/608711485849337856/1080399337550528522/26c90969d1e78fe9c7f7abe27f5e5901.gif","https://media.discordapp.net/attachments/608711485849337856/1080399337156259860/45fd79710f44cac438dbd438bbbaeb43.gif","https://media.discordapp.net/attachments/608711485849337856/1080399336724242442/9f834e991cf22a79351e5ef7b44ebd40.gif","https://media.discordapp.net/attachments/608711485849337856/1080399336313208832/af1d61b035f1ddf08c737f646332caae.gif","https://media.discordapp.net/attachments/608711485849337856/1080399335902162944/dc21a4438f149b06550771a1035cbdd6.gif","https://media.discordapp.net/attachments/608711485849337856/1080399335491117076/55b2b8e35e0ea6af0689e3fa708a1e7b.gif","https://media.discordapp.net/attachments/608711485849337856/1080399334652260362/1598ed3a2c20a3f89c3298ec73cc452e.gif","https://media.discordapp.net/attachments/608711485849337856/1080399334157328394/450688268136789e5656b11302ad577f.gif","https://media.discordapp.net/attachments/608711485849337856/1080397610273226832/Anime_PP_Gif_60.gif","https://media.discordapp.net/attachments/608711485849337856/1080397609983815730/a_1d0529693118178357b0bd88446be5d4.gif","https://media.discordapp.net/attachments/608711485849337856/1080397343242862612/a_a255b86972fa385a26c7683f11e30af9.gif","https://media.discordapp.net/attachments/608711485849337856/1080397342915702884/Anime_PP_Gif_9.gif","https://media.discordapp.net/attachments/608711485849337856/1080074755115323482/5160491828fcdbe666ce39bb412f3e44.gif","https://media.discordapp.net/attachments/608711485849337856/1080054564172091402/3BD328A4-B8BB-40F4-8093-5FAB74E1D65D.gif","https://media.discordapp.net/attachments/608711485849337856/1079788290863005787/image0.gif","https://media.discordapp.net/attachments/608711485849337856/1079744847965081610/6faaf9d5984ed1d3e9900b129e4ba1df.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Anime Gif ;")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-anime','anime-gif','gifanime','animegif'],

  permLevel: 0

};

exports.help = {

  name: 'anime',

  description: 'lrowsxrd',

  usage: 'anime'

};
