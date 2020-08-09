module.exports = {
    name: 'prune',
    description: 'Bulk deletes messages.',
    aliases: ['delete', 'bulkdel'],
    usage: '<number of messages (1-99)>',

    execute(message, args){

        if(message.member.hasPermission('MANAGE_MESSAGES')){
            const amount = parseInt(args[0]) + 1;

            if(isNaN(amount) || amount < 2 || amount > 100){
                return message.reply('THAts not A vaLId inteEGer NIGba.\nGOta be 1 - 99');
            }

            message.channel.bulkDelete(amount).catch(err => {
                console.error(err);
                return message.channel.send('ColDnt pROoon');
            });
        }

        else{
            return message.channel.send('You DON;t HAVe PERms you WORTHELs PIECE oFGARBAJE');
        }
    }
}