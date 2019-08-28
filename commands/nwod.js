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
		output="";
		//chance die
		if (args.length == 0){
			var chance =  rand.rollRange(1,10);
		}
		
		var output = "Coming Soon!";
		message.channel.send(output);
	},
};