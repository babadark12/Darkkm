const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711473652563968/1081928014583058582/rupr_446.gif","https://media.discordapp.net/attachments/608711473652563968/1081928014247497738/tenor_1.gif","https://media.discordapp.net/attachments/608711473652563968/1081928013966487552/ZwenlisGif_Woman_48.gif","https://media.discordapp.net/attachments/608711473652563968/1081928013672894484/image0_43.gif","https://media.discordapp.net/attachments/608711473652563968/1081928013039546410/6f33a7564dfd6629d86947465af56618-1.gif","https://media.discordapp.net/attachments/608711473652563968/1081928012381032468/QeyFrQ001.gif","https://media.discordapp.net/attachments/608711473652563968/1081928012053884958/QeyFrQ002.gif","https://media.discordapp.net/attachments/608711473652563968/1081927927949692988/woman101-1-1.gif","https://media.discordapp.net/attachments/608711473652563968/1081927862203973682/Zeyrox_1213.gif","https://media.discordapp.net/attachments/608711473652563968/1081927861193146408/a_0894b679be7bc947449896da7c9d88f4.gif","https://media.discordapp.net/attachments/608711473652563968/1081927744184647751/a_e637bc4d46a2113e4b24dbacc6a9e8a0.gif","https://media.discordapp.net/attachments/608711473652563968/1081927730863558716/a_d124ec32dc995be9b43d123d2a9dc3e6.gif","https://media.discordapp.net/attachments/608711473652563968/1081927663188463636/a_70c8460bfe0406d39e4ea430ea072463.gif","https://media.discordapp.net/attachments/608711473652563968/1081927663599493131/a_e925e2c8b86967c9241049da76105ab7.gif","https://media.discordapp.net/attachments/608711473652563968/1081927595228156017/a_9e6bb89a80d531633b78a5a8b025a750.gif","https://media.discordapp.net/attachments/608711473652563968/1081927662789984256/a_143a7349fd452217f93eacc0da1957f0.gif","https://media.discordapp.net/attachments/608711473652563968/1081927664107016202/a_240f5233f88a955ee7f4dae7ffc07505.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("girl Gif")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-wofdkdbman','woman-gvndfjkvif','gifwvoman','womafjbjfggif','kafvddın'],

  permLevel: 0

};

exports.help = {

  name: 'girl',

  description: 'lrowsxrd',

  usage: 'girl'

};
