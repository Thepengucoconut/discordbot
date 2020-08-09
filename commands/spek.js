module.exports = {
    name: 'spek',
    definition: 'spits actual fire.',
    aliases: ['sp3k'],
    cooldown: 3,

    execute(message, args){
        
            function rand(min, max){
                let randomNum = Math.random() * (max - min) + min;
                return Math.round(randomNum);
            }

            simpDiss = [
`Who the fuck do you think you are
Your girlfriend lives so far
Its funny what i did to her
I peed all over her
She had a crazy fetish
You wouldn’t know that you’re pathetic.
Someone grab a medic`,

`Dude i can already hear you getting pissed,
Have you ever rinsed,
Your face looks like a six
Flip doc getting so mad
Turns out you’re just bad at everything you do`,

`What’s up bro ima make this quick,
We can’t ignore the fact that you’re a simp
yeah we’re friends burt this is where it ends.
You;re nothing to me but a loose end.`,

`Yeah you had a hard past but what about the present
You’re nothing to me but a peasant
You cowered out my boxing match
I would have given you whiplash.`,

`I’ll wreck you in any game and that’s facts,
You have a shit name and you know this diss smacks
You look like a fucking ghost,
Don’t worry after this diss you’ll be looking like toast.

Honestly dude, go out in the sun,
You make girls run`,

`Boy you built like a panda bear that eats bamboo,
You belong in a zoo
Man screw you
You are the most irritating person i have ever met
You are literally one in a million with the most annoying mindset.

You and your girlfriend haven’t even met yet
I bet you your stomach is upset.`
            ];

            imBest = [
`Lemme explain why i'm the best
I do not take offense 
Im practically wearing a bullet-proof vest
If you’re cool with me being blessed`,

`I’m supernatural shit
I must be possessed.
“Oh Spek, please gimme some rest”
Oh you’re girl saw now she impressed`,

`I put time and work in, I invest.
All cuz i’m just tryna be the best (I am)
I am better at being the best at greatness
All the stuff i be doing be outrageous

Spitting hot bars it's getting contagious
I know it’s confusing call it the matrix
Who are you? I don’t know what your name is (who are you?)`,

`Make a diss on someone and they fall
People look up to me but i'm not tall (no I’m not)
Thinking you’re better than me, that’s a miscall.
I knock everyone away like a cue ball

I can switch up the flow like a curveball
No this ain’t a game, blues clues,
Make this shit hit the news, who the fuck are you
Now this shit i knew,
Writing poetry, call me Dr. Sue (Huh!?)`,

`New to making raps by killing these tracks
Destroying everyone
Yeah these ain't no hacks
I am underrated, that is facts,

Come my way, you’re gonna get slapped
Cause i can rap, back to back
You be on snapchat, chat, chat, chat
Sorry boy I didn’t text you, back, back, back
Wanting me to respond, but everything you say be whack, whack whack. (whack whack)`,

`Yeah this beat go hard
Shoot ya shot, ima bombard
I direct traffic like a crossing guard
I make music videos in my backyard

Attacking me thats the wrong card
How ya’ll getting destroyed by someone who’s fifteen 
I get high with this beat I don’t need no green,
I destroy these tracks
I am mean.`,

`I make these racks
I ain’t got a team
Everything I spit is fax
This is shit you’ve never seen

People really must think I'm on lean (Yuh!)
Yuh im the best
I do not take offense’
I am practically wearing a bulletproof vest
Better than the rest
Cuz i am the best

Yuh

Better than the rest
Cuz i am the best
Thinking you’re better than me
Please come and try me`,

`You simply can’t see reality
Yeah my shit’s clean
I rap but I don’t sip on lean or the green
Yeah, you might as well call me Mr. Clean

Your shit’s dirty, you must shop at Ross.
I ain’t gotta boss coming at me that’s a big loss
Im collecting these checks like The Red Cross
Yeah I got the sauce, 
but I ain’t no clown wearing lip gloss no.`,

`Yeah Im the best
I do not take offense
I’m practically wearing a bulletproof vest
Better than the rest
Cuz i am the best, 

Yeah

Better than the rest
Cuz I am the best

Yuh.`
            ]
            
            switch(rand(0, 1)){
                
                case 0:
                    message.channel.send(simpDiss[rand(0, simpDiss.length)]);

                case 1:
                    message.channel.send(imBest[rand(0, imBest.length)]);
            }
    }
}