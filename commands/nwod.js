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
		var output="";
		var successes = 0;
		var fails = 0;
		var rollsArr = [];
		//chance die
		if (args.length == 0){
			var chance = rand.rollRange(1,10);
			if(chance==1){output="DISASTROUS FAILURE";}
		}else{
			var rolls = rand.rollRepeat(pool,1,10);
			output += String(rolls);
		}
		
	
		message.channel.send(output);
	},
};