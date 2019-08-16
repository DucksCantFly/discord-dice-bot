// Initiate Bot
const fs = require("fs"); //Node's file system module
const Discord = require("discord.js");
const {pre, token} = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

//get commands
const commandsInput = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsInput){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once("ready", () => {
	console.log("Dice ready to roll!");
});

client.on("message", message =>{
	
	if (!message.content.startsWith(pre) || message.author.bot) return;
	const args = message.content.slice(pre.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if(!client.commands.has(command)) return;
	
	try{
		client.commands.get(command).execute(message,args);
	}
	catch (error){
			console.error(error);
			message.reply("command unable to be processed");
	}
	
});


client.login(token);