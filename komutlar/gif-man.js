const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711476219478045/1079725057263276052/ea34dcca8be2c7b7557f409ccbe03a55.gif","https://media.discordapp.net/attachments/608711476219478045/1079954369883156530/pfp1.gif","https://media.discordapp.net/attachments/608711476219478045/1081939241900183612/a_1439b65037afce3c0c95b49a73723963.gif","https://media.discordapp.net/attachments/608711476219478045/1081939284711440404/a_0712a3c027aaa1a80d00f249292fa1fe.gif","https://media.discordapp.net/attachments/608711476219478045/1081939509123481800/a_376d0e9522e36f41af486a3b90627f92.gif","https://media.discordapp.net/attachments/608711476219478045/1081939507345117365/71.gif","https://media.discordapp.net/attachments/608711476219478045/1081939545819459674/a_15824aa34086ea4d9e6684809a57d2f1.gif","https://media.discordapp.net/attachments/608711476219478045/1081939546146603048/a_4dc75178a986d32ed5995bba2beeae10.gif","https://media.discordapp.net/attachments/608711476219478045/1081939546549268682/Gif_PP_22-1.gif","https://media.discordapp.net/attachments/608711476219478045/1081939546909982841/a_b4b6f674c559141e9a7885a5b518739d.gif","https://media.discordapp.net/attachments/608711476219478045/1081939548080177152/AlwaroseManGif_83.gif","https://media.discordapp.net/attachments/608711476219478045/1081939582452506766/a_7208d07c9b58582cdcf985c59df176b5.gif","https://media.discordapp.net/attachments/608711476219478045/1081939582859350127/a_434b804b9d64244eac317c2d709ac77b.gif","https://media.discordapp.net/attachments/608711476219478045/1081939583392030720/a_23a29a41dff9bc2b854bb40c44749a51.gif","https://media.discordapp.net/attachments/608711476219478045/1081939584499322990/zwannis_Gif_6.gif","https://media.discordapp.net/attachments/608711476219478045/1081939584843259935/a_d98341d76d08cfcf41eb2228f97f9b9f.gif","https://media.discordapp.net/attachments/608711476219478045/1081939626278793367/a_599df949e10ba73d6e27e2833d23e235.gif","https://media.discordapp.net/attachments/608711476219478045/1081939626681434212/image2.gif","https://media.discordapp.net/attachments/608711476219478045/1081939627444817950/1651907548971.gif","https://media.discordapp.net/attachments/608711476219478045/1081939627910377512/Aishii_60.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Man Gif")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-fvhdkman','manjvhfe-gif','gifmavjfdhkn','mangjfdbvkbfjif'],

  permLevel: 0

};

exports.help = {

  name: 'man',

  description: 'lrowvn cv msxrd',

  usage: 'mamvcmmn'

};
