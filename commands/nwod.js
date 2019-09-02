const rand = require("../js/random.js");

/*
	uses d10
	target val: default 8, >= is success
	some rules allow 8s, 9s, and 10s to explode
	explode = roll again


*/


module.exports = { 
	name: "nwod",
	description: "Useful for nWoD system. COMING SOON",
	execute(message,args){
		
		var pool = Number(args[0]);
		var n_again = 10;
		var diff = 8; // default difficulty is 8
		var successes = 0;
		var fails = 0;
		var rollsArr = [];
		if (args.length > 1) n_again = Number(args[1]);
	
		for(var i = 0; i < pool; i++){
			rollsArr.push(rand.rollRange(1,10)); //rolls 1d10
			if (rollsArr[i] >= diff){
				successes++;
			}else if (rollsArr[i] == 1){
				fails++;
			}
			while(rollsArr[i] >= n_again){
				pool++;
				i++;
				rollsArr.push(rand.rollRange(1,10)); //rolls 1d10
				if (rollsArr[i] >= diff){
					successes++;
				}else if (rollsArr[i] == 1){
					fails++;
				}
			}
		}
		
		
		
		var output = `Successes: ${successes}\nValues Rolled: ${rollsArr}`
		message.channel.send(output);
	},
};