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
		
		var output = "Coming Soon!";
		message.channel.send(output);
	},
};