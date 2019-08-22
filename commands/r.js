const rand = require("../js/random.js");
const parser = require("../js/roll-parser.js");

/*
	Command for general dice rolling
		Features
			roll xDy dice and return result
			handle exploding dice (SR, etc.)
			return number of values at or above a certain value
				Subtract the number at or below a certain value
					Allow users to define whether value ought to be > or < ? for + or - ?
					! exploding dice
					!>n exploding dice at and above n
			check to see if a given value has been rolled at all
			Custom dice?
*/


module.exports = { 
	name: "r",
	description: "command to suit your general dice rolling needs",
	execute(message,args){
		//return message if no roll made
		if (!args){
			message.channel.send("No arguments provided");
			return;
		}
		
		
		var userInput = "";
		/*
		for(var i = 0; i < args.length; i++){
			userInput += args[i];
		}
		
		//quick fudge //TODO EXPAND FUNCTIONALITY
		//find dice roll
		//var diceRoll = /(\d+)d(\d+)/;
		var val = parseInt(userInput.slice(0,1));
		var val2 = parseInt(userInput.slice(2,4));
		*/
		var userInput = parser.tokenize(args[0]);
		var output = "";
		for(var i = 0; i < userInput.length;i++){
			output += userInput[i].value + " ";
		}
		message.channel.send(output);
	},
};