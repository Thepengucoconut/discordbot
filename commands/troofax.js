module.exports = {
    name: 'troofax',
    description: 'Spits FAX',
    aliases: ['truth', 'truefacts', 'fax', 'facts'],
    cooldown: 1,

    execute(message, args){
        truth = [
            `The word "Poem" originates from Edgar Allan "Poe".`,
            `Gay people are allergic to salt.`,
            'Black people are statistically more likely to commit crimes.',
            'Nothing you do means anything.',
            'Water is dry.',
            'Throw beans at jews.',
            'Consuming cyanide in small dosages builds resistance over time.',
            'Left handed people are more likely to be retarded.',
            `If you cross your eyes for long enough, you'll stay that way.`,
            `The more words you know, the more likely you are to remain a virgin.`,
            `If you come out of the womb backwards, you have a statistically higher chance of getting penis cancer.`,
            `You can wise up, but have you ever tried to wise down?`,
            `Every 60 seconds in Africa, 2 minutes pass.`,
            `I will milk you to death.`,
            `MC? What does that stand for, Mayo Clinic?`,
            `As Dylan wouldn't say: "I really don't like the way you're holding that 2 by 4, Moe..."`,
            `If you take the amount of letters in your name and multiply that by the year you were born, then you can divide that by the number of letters in your name to get the year you were born.`,
            `Vincent van gogh cut off his ear so he wouldn't have to listen to my bullshit anymore.`,
            `If you drive 55,000 km/h, every red light will look green.`,
            `If basketball teams worked together, they would score a lot more points.`,
            `If you take the vegetables off your cheeseburger, you will intake fewer calories.`,
            `If you glue a mirror over your drivers license photo, the cops will have to arrest themselves!`,
            `If you're about to get arrested, simply insert your hands into your asshole so they won't be able to handcuff you.`,
            `The average person swallows 8 corncobs in their sleep.`,
            `The answer to most math problems is 12.`,
            `On average, 3 of your family members will become serial killers.`,
            `Adolf Hitler is still alive, living in South America.`,
            `Kool Aid Man is a founding member of the KKK.`,
            `George Orwell never learned how to read.`,
            `There are more atoms in a drop of water than adams in this server.`,
            `Arabic people can only walk in straight lines.`,
            `Santa Claus invented the AK-47.`,
            `The Statue of Liberty is actually made out of Legos.`,
            `Bitcoin was invented by John Bit Coin in 1890, when he joined two bits of a coin together to make a Bitcoin.`,
            `There are no gas stations in North Dakota.`,
            `Mount Rushmore used to have Nicholas Cage, too.`,
            `The first Wendy's was on top of Mount St. Helens.`,
            `The music video for pumped up kicks was filmed at OLCHS.`,
            `If you pull a Shane and break your arms, you will die of starvation.`,
            `Osama Bin Laden banked with Chase.`,
            `Colorblind people can only see red, blue, purple, and #A53C03.`,
            `If you make a snowman out of cheese, you've made a terrible mistake.`,
            `The 'e' in "e-learning" stands for Edward.`,
            `If you're attacked by a crocodile, just shoot your gun into its face, thereby incapacitating it.`
        ];

        function rand(min, max) {
            let randomNum = Math.random() * (max - min) + min;
            return Math.round(randomNum);
        }

        message.channel.send(`BreD's TRoo FACt: ` + truth[rand(0, truth.length - 1)]);
    }
}