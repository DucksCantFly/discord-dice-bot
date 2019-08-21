const rand = require("../js/random.js");

/*
	randomized duck shenanigans
*/


module.exports = { 
	name: "quack",
	description: "quacks",
	execute(message,args){
		
		var output = ":duck:";
		message.channel.send(output);
	},
};