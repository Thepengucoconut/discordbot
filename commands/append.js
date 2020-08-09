const {riddles, answers} = require("riddle.js");

module.exports = {
    name: 'append',
    description: 'Dev command.',

    execute(message, args){

        if(message.author.id === '422576620289916929'){
        
            if(args.length != 2)
                return message.channel.send(`You're the one who fucking made me and yo ustill don't fucking understand that you can't use that command like that?`);

            array = args[0];
            data = args[1];

            try{
                eval(array).push(data);
            } catch(error){
                console.log(error);
                message.channel.send('There was an error appending data.');
            }
        }

        else{
            message.channel.send(`Dev command only.`);
        }
    }
}