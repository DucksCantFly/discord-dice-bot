const rand = require("../js/random.js");
/*
	oWoD Dice rolls:
		All dice rolled are d10
		Number of successes counted
		successes defined as 1d10 >= difficulty value
		default difficulty is 6
		max difficulty is 10, min is 0 TODO?
		Each 1 subtracts from success
		Minimum number of successes = 0
		TODO - Account for botches?
		
*/


module.exports = { 
	name: "wod",
	description: "Useful for working with the oWoD system. First argument is the size of your dice pool, second argument is difficulty of check. Default difficulty is 6.",
	execute(message,args){
			const d10 = [1,10];
			
			//initiate rolls
			var pool = Number(args[0]);
			var diff = 6; // default difficulty is 6
			var successes = 0;
			var rolledVal;
			if (args.length > 1) diff = Number(args[1]);
			
			//calculate number of successes
			for(var i = 0; i < pool; i++){
				rolledVal = rand.rollRange(d10[0],d10[1]);
				if (rolledVal >= diff){
					successes++;
				}
				else if (rolledVal == 1){
					successes--;
				}
			}
			if(successes < 0) successes = 0;
			
			message.channel.send(`${successes} successes!`);
	},
};

