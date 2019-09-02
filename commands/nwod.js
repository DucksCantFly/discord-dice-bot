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
		var rollsArr = [];
		if (args.length > 1) n_again = Number(args[1]);
		
		while(rollsArr.length < pool){
			rollsArr.push(rand.rollRange(1,10));
			if (rollsArr[rollsArr.length-1] >= diff) successes++;
			if (rollsArr.length > 0 && rollsArr[rollsArr.length - 1] >= n_again) pool++;
		}
		
		var output = `Successes: ${successes}\nValues Rolled: ${rollsArr}`
		message.channel.send(output);
	},
};