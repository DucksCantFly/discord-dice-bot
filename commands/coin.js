const rand = require("../js/random.js");

/*
	Rolls 1d2, outputs Heads on 1, Tails on 2
*/


module.exports = { 
	name: "coin",
	description: "Flips a coin.",
	execute(message,args){
		
		var flip = rand.rollRange(1,2);
		var output = (flip == 1) ? "Heads":"Tails";
		message.channel.send(output);
	},
};