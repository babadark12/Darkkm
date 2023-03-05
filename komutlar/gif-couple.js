const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711480346542102/1081603626327347341/gvfytubhjnimokc.gif","https://media.discordapp.net/attachments/608711480346542102/1081297790677819412/d4f1308ba642b1e832ab906f82dfd41d.gif","https://media.discordapp.net/attachments/608711480346542102/1081297730967719957/couple.gif","https://media.discordapp.net/attachments/608711480346542102/1081297646020468837/70ad999a0d2f7744319400089357da5c.gif","https://media.discordapp.net/attachments/608711480346542102/1081297620397457408/f7a19f4fa1c206f5d53f3804d0b4c047.gif","https://media.discordapp.net/attachments/608711480346542102/1081297579943395499/Couple_PP_Gif_8.gif","https://media.discordapp.net/attachments/608711480346542102/1081297531503382559/a_390353b9eefda784c1caf66c8c5a7358.gif","https://media.discordapp.net/attachments/608711480346542102/1081297510691250326/LaurieCoupleVipGif-1-1.gif","https://media.discordapp.net/attachments/608711480346542102/1081297474708324403/couple-kiss.gif","https://media.discordapp.net/attachments/608711480346542102/1080904900243902575/c0d1d87645c5080de12d2f41502336a5.gif","https://media.discordapp.net/attachments/608711480346542102/1079723231004590081/7DC73F8B-6D92-4D7A-A103-C84650DDB223-1.gif","https://media.discordapp.net/attachments/608711480346542102/1079723231927336960/Couple_PP_Gif_23-2.gif","https://media.discordapp.net/attachments/608711480346542102/1079723230035705856/Vanda73.gif","https://media.discordapp.net/attachments/608711480346542102/1079485571040301136/image2.gif","https://media.discordapp.net/attachments/608711480346542102/1079485570251751464/image0.gif","https://media.discordapp.net/attachments/608711480346542102/1077876846282145873/a_f023cf95cea5c18b5f48e3d1d4f5d4cb.gif","https://media.discordapp.net/attachments/608711480346542102/1077183877501698128/A08451EB-E6C7-48A7-ABD5-BFEB2D955B4F.gif","https://media.discordapp.net/attachments/608711480346542102/1077183877740769310/a_dfbab5933b174300d832d127587f9975.gif","https://media.discordapp.net/attachments/608711480346542102/1077183878076309635/a_7a1f7285bdf9b33aa83194f476de9e2e.gif","https://media.discordapp.net/attachments/608711480346542102/1077183878386696283/a_63346da8f08cf72af8d4a29d75448545.gif","https://media.discordapp.net/attachments/608711480346542102/1077183878680293376/a_728d27fd5ab18d5bbae25d4546831bd6.gif","https://media.discordapp.net/attachments/608711480346542102/1075892764379721898/Couple_PP_Gif_74.gif","https://media.discordapp.net/attachments/608711480346542102/1075659435860574228/a_f763de1461793f9f178306447d2f404e.gif","https://media.discordapp.net/attachments/608711480346542102/1075659435336290314/a_c6608b542686887efad3bf9c6ee1eca0.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Couple Gif")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-jvkdhvkouple','couplfdjvkjfde-gif','gifconfmdn,vc , vc vuple','couplfdkbvhegif'],

  permLevel: 0

};

exports.help = {

  name: 'couple',

  description: 'lrowsfdkvxrd',

  usage: 'couple'

};
