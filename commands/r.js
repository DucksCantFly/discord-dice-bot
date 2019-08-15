const rand = require("../js/random.js");

/*
	Command for general dice rolling
		Features
			roll xDy dice and return result
			handle exploding dice (SR, etc.)
			return number of values at or above a certain value
				Subtract the number at or below a certain value
					Allow users to define whether value ought to be > or < ? for + or - ?
			check to see if a given value has been rolled at all
			Custom dice?
*/


module.exports = { 
	name: "r",
	description: "command to suit your general dice rolling needs",
	execute(message,args){
		
		var output = "Coming Soon!";
		message.channel.send(output);
	},
};