const Discord = require("discord.js");
require("dotenv").config();

const { runCommand } = require("./utils/run-command");

const client = new Discord.Client();

client.on("ready", () => console.log(`${client.user.username} is ready!`));

client.on("message", async (message) => {
  const typedMessage = message.content;

  console.log(
    `Bot received a message from guild ${message.guild.id} (${message.guild.name}): `,
    typedMessage
  );

  const didUserTypeACommand =
    typedMessage.startsWith("!") && message?.guild?.id;

  if (didUserTypeACommand) {
    await runCommand(message);
  }
});

client.login(process.env.DISCORD_TOKEN);
