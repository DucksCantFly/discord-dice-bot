
module.exports = { 
	name: "help",
	description: "List the purpose of each command provided by this bot",
	execute(message,args){
		var output = ">>> "; //TODO experiment with formatting
		var commandList = [
			"!help - List the purpose of each command provided by this bot",
			"!r - roll function, for general dice rolling",
			"!wod  - Useful for working with the oWoD system. First argument is the size of your dice pool, second argument is difficulty of check. Default difficulty is 6.",
			"!nwod - Useful for nWoD system. COMING SOON",
			"!statarray - Rolls 4d6 and drops the lowest value of the four. Does this six times, and returns the generated values. Will provide list of stats sorted if provided 'sort' as an argument",
			"!quack - Friendly duck sounds, provides a glimmer of hope in the darkness."
		];
		
		//construct output
		for(var i = 0; i < commandList.length; i++)
			output += commandList[i] + '\n';
		
		message.channel.send(output);
	},
};