import Discord from "discord.js";
// import WOKCommands from 'wokcommands'
require("dotenv").config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`I'm ready!`);
});

const respondToMessage = (msg) => {
  if (msg.content === "i love bee") {
    msg.reply("Bee loves Htoo! ❤️");
  }
};

client.on("message", respondToMessage);
