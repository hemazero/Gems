const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    // لمنع البوت من الرد على نفسه
    if (message.author.bot) return;

    if (message.content === 'ping') {
        message.reply('pong!');
    }
});

// ضع التوكن الخاص بك هنا بدلاً من YOUR_BOT_TOKEN_HERE
client.login('YOUR_BOT_TOKEN_HERE');
