const axios = require("axios");

const runCommand = async (message) => {
  const URL = `${process.env.COMMANDS_API_URL}/commands/run`;

  try {
    const { guild, content, channel, ...rest } = message;

    const response = await axios.post(URL, {
      ...rest,
      guildId: guild.id,
      commandName: content,
      channelId: channel.id,
    });

    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  runCommand,
};
