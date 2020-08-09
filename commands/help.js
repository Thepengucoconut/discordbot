const {prefix} = require('../config.json');

module.exports = {
    name: 'help',
    description: 'list commands',
    aliases: ['commands', 'comms'],
    usage: '[command name]',
    cooldown: 10,
    
    execute(message, args){
        const {commands} = message.client;

        // If the command is executed without arguments
        if(!args.length){
            try{
                // Send the author the information about the bot
                message.author.send(`prefix: ${prefix}\n` + 
                'AL of my Womderful commAnds: ' + commands.map(command => command.name).join(', ') + '\n' + 
                `hope that educated you a bit you ignorant shit.`);
                
                if(message.channel.type !== 'dm'){
                    return message.channel.send(`${message.author} ISent YA A DEE eMM`);
                }
            }
            catch (error){
                console.error(`could not send help to ${message.author.tag}.\n`, error);
                message.reply(`${message.author} MAybe FUCKing TURn ON you R DM's BEfor YOU Ask ME TO DM YOU?`);
            }
        }

        else{
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if(!command)
                return message.reply('THAt AinT aN eXisTIng COmmANd BucK-O');

            if(command.aliases)
                message.channel.send(`Aliases: ${command.aliases.join(', ')}`);

            if(command.description)
                message.channel.send(`Description: ${command.description}`);

            if(command.usage)
                message.channel.send(`Usage: ${prefix}${command.name} ${command.usage}`);

            if(command.cooldown)
                message.channel.send(`Cooldown: ${command.cooldown}`);
        }
    }
}