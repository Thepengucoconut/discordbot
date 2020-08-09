module.exports = {
    name: 'playasongprettyplease',
    
    execute(message, args){

        if(message.author.id === '416437704549597199'){
            message.channel.send('Fuck YOU NEAVIN');
        }

        else if(message.author.id === '422576620289916929'){
            message.channel.send('ScrEOO YOU in the ASS ADAM');
        }
        
        else if(message.author.id === '343878847306924044'){
            message.channel.send('FUck OFF bREAD');
        }
        else{
            message.channel.send(`${message.author.name} fuck you.`);
        }
    }
}