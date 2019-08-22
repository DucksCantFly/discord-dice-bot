const rand = require("../js/random.js");

module.exports = { 
	name: "statarray",
	description: "Rolls 4d6 and drops the lowest value of the four. Does this six times, and returns the generated values. Will provide list of stats sorted if provided 'sort' as an argument",
	execute(message,args){
			
			var statArray = [];

			//generate values
			for(var i = 0; i < 6; i++){
				var tempArray = rand.rollRepeat(4,1,6);
				// remove smallest value from tempArray
				tempArray.sort(function(x,y){return y - x});
				tempArray.pop();
				var statSum = 0;
				for(var j = 0; j < 3; j++){
					statSum += tempArray[j];
				}
				statArray.push(statSum);
			}
			
			if(args[0] === "sort") statArray.sort(function(x,y){return y - x});
			
			//construct output
			var output = "Stats: ";
			for(var i = 0; i < statArray.length; i++)
				output += statArray[i] + " ";
			
			message.channel.send(output);
	},
};