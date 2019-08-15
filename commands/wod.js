/*
	oWoD Dice rolls:
		All dice rolled are d10
		Number of successes counted
		successes defined as 1d10 >= difficulty value
		default difficulty is 6
		max difficulty is 10, min is 2
		Each 1 subtracts from success
		Minimum number of successes = 0
		Botch occurs if no successes happens and at least one 1 was rolled
		
*/
const rand = require("../js/random.js");


module.exports = { 
	name: "wod",
	description: "Useful for working with the oWoD system. First argument is the size of your dice pool, second argument is difficulty of check. Default difficulty is 6.",
	execute(message,args){
			//initiate rolls
			var pool = Number(args[0]);
			var diff = 6; // default difficulty is 6
			var successes = 0;
			var fails = 0;
			var rollsArr = [];
			if (args.length > 1) diff = Number(args[1]); //check if dice difficulty was provided
			var botch = false;
			//calculate number of successes
			for(var i = 0; i < pool; i++){
				rollsArr.push(rand.rollRange(1,10)); //rolls 1d10
				if (rollsArr[i] >= diff){
					successes++;
				}else if (rollsArr[i] == 1){
					fails++;
				}
			}
			if( successes == 0 && fails > 0) botch = true;
			successes -= fails;
			if(successes < 0) successes = 0;
			
			//construct output
			var output = `Successes: ${successes}\nValues Rolled: ${rollsArr}`
			if (botch) output += `\n:exclamation: BOTCH :exclamation: `;
			message.channel.send(output);
	}
};

