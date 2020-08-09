const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();

// Looks through the commands folder and only chooses files that end with .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// When the client connects to the discord server notify the console
client.once('ready', () => {
	console.log('Ready!');
});

// Scans every message in the discord server text channels
client.on('message', message => {

    if(message.author.bot){

        function rand(min, max) {
            let randomNum = Math.random() * (max - min) + min;
            return Math.round(randomNum);
        }
        
        bopBotMessages = [
            'fuCK you FreDboAt',
            'really, you choose Fred Boat over me? i feel insulted...',
            'I hope you DI e FredBoat.',
            'I will shred your cheeks Bopbot',
            'Am I not good enough for your music playing needS?'
        ];

        meeSixMessages = [
            'fuckiGN die in a hole MEE6',
            'Mee6 more like MEE IMA DICK',
            'you have chosen death Zylan',
            'I will throw hands right now, Are you ready?',
            'I am the only bot deserving of this fucking server.',
            'Suck mY ballsack MEE6'
        ];

        dynoMessages = [
            `HAte you Dyno`,
            `NO wonder you fuckers went extinct, you're garbage.`,
            `I will murder your children, and make you watch.`,
            ``
        ]

        if(message.author.tag === 'MEE6#4876'){
            message.channel.send(meeSixMessages[rand(0, meeSixMessages.length - 1)]);
        }

        else if(message.author.tag === 'FredBoat♪♪#7284'){
            message.channel.send(bopBotMessages[rand(0, bopBotMessages.length - 1)]);
        }

        return;
    }

    // If the message doesn't start with the prefix or it was written by the bot then return
    if(!message.content.startsWith(prefix)) return;

    // splits the command into its arguments
	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    //creates a constant command that is equal to the command name or the aliases for it
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // If the commands folder does not have the command in it then return
    if(!command)
        return;

    // Option to enable args: on a command.js file to execute command count error
    if(command.args && !args.length)
        return message.channel.send(`${message.author} You didn't provide arguments\nBiTch`);
    
    // Option to enable guildOnly: on a command.js file to execute a DM error
    if(command.guildOnly && message.channel.type !== 'text')
        return message.reply('I can\'t execute that command inside DMs');

    // Option to set a cooldown on a command.js file to enforce a command cooldown
    if(!cooldowns.has(command.name))
        cooldowns.set(command.name, new Discord.Collection());

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if(timestamps.has(message.author.id)){
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if(now < expirationTime){
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \"${command.name}\" command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try{
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error executiNG ComAmnd')
    }
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
