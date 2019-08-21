const rand = require("../js/random.js");

/*
	randomized duck shenanigans
*/


module.exports = { 
	name: "quack",
	description: "quacks",
	execute(message,args){
		var output = ":duck: ";
		var quackNum = rand.rollRange(1,6);
		var punctuation = [" ",".","!","?"]
		
		for(var i = 0; i < quackNum; i++){
			output += "Quack" + punctuation[rand.rollRange(0,punctuation.length)] + " ";
		}
		
		message.channel.send(output);
	},
};