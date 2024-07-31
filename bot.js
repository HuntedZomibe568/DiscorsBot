const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Keep the bot alive using a simple server
app.get('/', (req, res) => res.send('Bot is running'));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login('YOUR_BOT_TOKEN_HERE'); // Replace with your bot token
