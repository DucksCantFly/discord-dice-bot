
module.exports = { 
	name: "help",
	description: "List the purpose of each command provided by this bot",
	execute(message,args){
		var output = "";
		var commandList = [
			"!help - List the purpose of each command provided by this bot",
			"!wod  - Useful for working with the oWoD system. First argument is the size of your dice pool, second argument is difficulty of check. Default difficulty is 6."
		];
		
		//construct output
		for(var i = 0; i < commandList.length; i++)
			output += commandList[i] + '\n';
		
		message.channel.send(output);
	},
};