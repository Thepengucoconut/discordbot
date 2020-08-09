module.exports = {
    name: 'riddle',
    description: 'Gives you a brain teaser.',
    cooldown: 3,

    execute(message, args){
        
        function rand(min, max){
            let randomNum = Math.random() * (max - min) + min;
            return Math.round(randomNum);
        }

        riddles = [
            `What's red and black and white all over?`,
            `What is green and fuzzy and will kill you if it falls out of a tree?`
        ]

        answers = [
            `A monoracial sacrificial orgy.`,
            `A pool table.`
        ]

        if(riddles.length != answers.length)
            return console.log(`Too many riddles/answers.`);

        index = rand(0, riddles.length - 1);
        message.channel.send(riddles[index] + `\n||${answers[index]}||`);
    }
}