module.exports = {
	name: 'ping',
	description: 'PonG?!',
    cooldown: 5,

	execute(message, args) {
		message.channel.send('FcUck Yo Ou');
	},
};