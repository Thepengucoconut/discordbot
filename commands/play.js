module.exports = {
    name: 'play',
    description: 'Plays a song.',
    usage: '<song link>',

    execute(message, args){
        
        if(!args.length){
            message.channel.send('the command YOu\'re tryiNG to ask me to do seems to be !?playavideoprettyplease');
            message.channel.send('send that one and then we\'ll talk');            
            return;
        }
    }
}