/*
	Provides functionality for parsing string input for DuckDice bot commands
	
	Syntax rules
		Spaces do not matter
*/
const rand = require("../js/random.js");


function is_digit(c){return /\d/.test(c);}
function is_operator(c){return /\d|<|>|=|<=|>=/.test(c);

//math operations
// these functions do not get exported, and are intended only for use inside this module
function add(a,b){return a + b;}
function sub(a,b){return a - b;}
function mul(a,b){return a * b;}
function div(a,b){return a / b;}
function exp(a,b){return a ** b;}

//	these functions are helper functions for the compare function
function lt(a,b){return a < b;} 
function gt(a,b){return a > b;} 
function lte(a,b){return a <= b;}
function gte(a,b){return a >= b;}
function equal(a,b){return a == b;}


//dice operations
function roll(a,b){return rand.rollRepeat(a,b);}
function compare(arr,b,func){
	//determine number of values in arr that meet func's criteria
		var num = 0;
		for(var i = 0; i < arr.length; i++){
			if func(arr[i],b){num++;}
		}
		return num;
}
//function explode(){}; TODO exploding dice


function tokenize(s){
	
	var arr = [];
	str.replace(/\s+/, "");
	str = str.split(" ");
	//str.forEach(function (char, id){ if is_digit(char))
}








module.exports{

	
}