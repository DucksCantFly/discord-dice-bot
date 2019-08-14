
module.exports = { 
	name: "help",
	description: "List the purpose of each command provided by this bot",
	execute(message,args){
			message.channel.send("Help - List the purpose of each command provided by this bot");
	},
};