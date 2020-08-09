module.exports = {
    name: 'not',
    description: 'NOT!',
    cooldown: 4,

    execute(message, args){
        message.channel.send(' ...NOT!');
    }
}