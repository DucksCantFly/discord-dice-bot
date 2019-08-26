const rand = require("../js/random.js");

/*
	All messages start with a :duck: emoji
	Are followed by number of 'Quacks' determined by the quackNum function
	Each quack has a randomly determined punctuation.
		The final quack may not end with an empty space. TODO
			DiceDuck cares about grammar.
*/


module.exports = { 
	name: "quack",
	description: "Friendly duck sounds, provides a glimmer of hope in the darkness.",
	execute(message,args){
		var output = ":duck: ";
		var quackNum = rand.rollRange(1,5);
		var punctuation = [" ",".","!","?"]
		
		for(var i = 0; i < quackNum; i++){
			
			output += "Quack" + punctuation[rand.rollRange(0,punctuation.length)] + " "
		}
		
		message.channel.send(output);
	},
};