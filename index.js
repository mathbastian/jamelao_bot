const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { msg } = require('./chok.json');

client.login( token );

client.on('ready', () => {
	console.log('entrei nessa porra');
	client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '!help',
        }
    });
});

const commandList = ['comer', 'idai', 'bater', "ofender", "observar", "chok", "peixe", "lol" ,"lavarasmaos"];

const ofensasIndividuais = ["a sua mãe é tão grande que tem o próprio fuso horário",
							"planta bananeira em chuva de piroca",
							"transa de costas",
							"chupa pinto",
							"queima a rosca"];

const lavarAsMaos =[	"Antes",
		    	"Depois",
			"Antes e depois",
			"Nem antes, nem depois"];

const ofensasColetivas = ["fez uma suruba com vossa mãe... ta em chok kk?"];

//all found here https://bast1an.imgur.com/all/#
const peixes = [
	'https://i.imgur.com/8q8tCpJ.png',
	'https://i.imgur.com/t7xxQvM.png',
	'https://i.imgur.com/G44kVY7.png',
	'https://i.imgur.com/Mxme9dt.png',
	'https://i.imgur.com/cZdrfpF.png',
	'https://i.imgur.com/cyP98eU.png',
	'https://i.imgur.com/yDWzesj.png',
	'https://i.imgur.com/hrmfOym.png',
	'https://i.imgur.com/2a9ivW1.png',
	'https://i.imgur.com/CfLxk0c.png',
	'https://i.imgur.com/0UObVR1.png',
	'https://i.imgur.com/TkJAbwN.png',
	'https://i.imgur.com/l3svjDw.png',
	'https://i.imgur.com/MoDTqst.png',
	'https://i.imgur.com/EzOFO9L.png',
	'https://i.imgur.com/zJ7naVj.png',
	'https://i.imgur.com/q0dtE3T.png',
	'https://i.imgur.com/f1TWTFU.png',
	'https://i.imgur.com/mqOeipV.png',
	'https://i.imgur.com/zQwM1tI.png',
	'https://i.imgur.com/dXR9WTp.png',
	'https://i.imgur.com/eLSJ0ap.png',
	'https://i.imgur.com/QrWqbal.png',
	'https://i.imgur.com/YSmpeXI.png',
	'https://i.imgur.com/Cvg38Rd.png',
	'https://i.imgur.com/pfn0jzn.png',
	'https://i.imgur.com/IGEj1Kj.png',
	'https://i.imgur.com/vXXmf5m.png',
	'https://i.imgur.com/TdfbTHH.png',
	'https://i.imgur.com/kP5WVBY.png',
	'https://i.imgur.com/UyBQMAc.png',
	'https://i.imgur.com/jadIWJy.png',	
];

client.on('message', message => {

	if ( !message.content.startsWith(prefix) || message.author.bot ) {
		if ( !message.content.startsWith(prefix) && message.mentions.everyone && !message.author.bot ){
			return message.channel.send('Marca a mãe também fdp');
		}
		return;
	}

	const splitCommand = message.content.slice(prefix.length).split(/ +/);
	const command = splitCommand.shift().toLowerCase();
	
	if ( command === 'merda' ){
		return message.channel.send('Tu que é um merda, rapá');
	}

	else if(command === 'observar'){

		const observado = message.mentions.users.first();

		if ( !message.mentions.users.size && !message.mentions.everyone ) {
			return message.reply('precisa especificar né...');
		}

		if(!message.mentions.users.first().presence.game){
			return message.channel.send(observado + " não está fazendo nada");
		}
		else {
			return message.channel.send(observado + "está jogando " + message.mentions.users.first().presence.game.name);
		}

	}

	else if(command === 'ofender'){

		if ( !message.mentions.users.size && !message.mentions.everyone ) {
			return message.reply('precisa especificar né...');
		}

		const alvo = message.mentions.users.first();
		
		if (message.mentions.everyone) {
			return message.channel.send( " O Jamelão " + ofensasColetivas[ofensaEscolhida = Math.floor(Math.random() * ofensasColetivas.length)] );
		}
		else{
			return message.channel.send( alvo + " " + ofensasIndividuais[Math.floor(Math.random() * ofensasIndividuais.length)] );
		}
		
	}

	else if (command === 'bater'){
		if ( !message.mentions.users.size && !message.mentions.everyone ){
			return message.channel.send(message.author + ' enfiou a mão no cu');
		}
		else if (message.mentions.users.first() === message.author){
			return message.channel.send(message.author + ' gozou no teclado');
		}
		else if ( message.mentions.everyone ){
			return message.channel.send(message.author + ' bateu uma pra todo mundo');
		}
		else {
			return message.channel.send(message.author + ' bateu uma pro ' + message.mentions.users.first());
		}
	}

	else if ( command === 'comer' ) {
		if ( !message.mentions.users.size && !message.mentions.everyone ) {
			return message.reply('precisa especificar né...');
		}
		
		const alvo = message.mentions.users.first();
		const comedor = message.author;

		if ( message.mentions.everyone ){
			return message.channel.send( comedor.username + ' comeu todo mundo do ' + message.channel.guild );
		}
		else if ( comedor.username === alvo.username ){
			message.channel.send( comedor.username + ' se comeu kkj mó retardado' );
		}
		else{
			message.channel.send( comedor.username + ' comeu ' + alvo.username + ' kkj' );
		}
	}

	else if ( command === 'idai' ){
		message.channel.send({files: ['https://i.pinimg.com/originals/82/42/ee/8242ee01f0193bcc49746adfeefa827d.jpg']});
	}

	else if (command === 'help'){
		var content = new String;
		for (const command of commandList) {
			content += ("!" + command + "\n").toString();
		}
		return message.channel.send(content);
	}

	else if (command === 'chok'){

		var content = new String;

		for (const line of msg) {
			content += ( line + "\n");
		}

		return message.channel.send(content);

	}

	else if (command === 'peixe'){
		message.channel.send({files: [peixes[Math.floor(Math.random() * peixes.length)].toString()]});
	}

	else if (command === 'lol'){
		
		var users = message.client.users.array();
		var content = new String("jogando lol: \n");
		
		for (const user of users) {
			if (user.presence.game != null && user.presence.game.name === 'League of Legends') {
				content += (user.username + "\n").toString();
			}
		}

		return message.channel.send(content);
	}
	else if (command === 'lavarasmaos'){
	
		return message.channel.send(lavarAsMaos[Math.floor(Math.random() * ofensasIndividuais.length)] 
	
	}

	else{
		message.channel.send("como assim, não entendi", {files: ['http://pm1.narvii.com/6720/c19745f0fdaeafa01ce90fddf9be489b4342e75c_00.jpg']});
	}

});
