/*
	Provides functionality for parsing string input for DuckDice bot commands
	
	Syntax rules
		Spaces do not matter
*/
const rand = require("../js/random.js");

function Token(type,value){this.type = type; this.value = value}

function is_digit(c){return /\d/.test(c);}
function is_operator(c){return /d|<|>|=|<=|>=|f|!|k|kl/.test(c)};

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
function arr_sum(arr){return arr.reduce(add,0);}
function compare(arr,b,func){
	//determine number of values in arr that meet func's criteria
	var num = 0;
	for(var i = 0; i < arr.length; i++){
		if (func(arr[i],b)){num++;}
	}
	return num;
}

function explode(arr,explode_arr,lower,upper){
		//method for handling exploding dice
		var rolls = arr;
		for(var i = 0; i < rolls.length;i++){
			for(var j = 0; j < explode_arr.length; j++){
				if (rolls[i] == explode_arr[i]){
					rolls.push(rand.rollRange(lower,upper));
				}
			}
		}
		return rolls;
}

function find_type(c){
	if(is_digit(c)){return "digit";}
	if(is_operator(c)){return "operator"};
	return "unknown";
}

function tokenize(s){
	var arr = [];
	s.replace(/\s+/, "");
	s = s.split("");
	
	var buffer = s[0];
	var previous_type = find_type(s[0]);	
	var pos = 1;
	while(pos < s.length){
		if(find_type(s[pos]) === previous_type){
			buffer += s[pos];
		}
		else{
			arr.push(new Token(previous_type,buffer));
			buffer = s[pos];
			previous_type = find_type(s[pos]);
		}
		pos++;
	}
	arr.push(new Token(previous_type,buffer));
	return arr;
}

//function compute_roll(){}; //TODO Shunting-Yard Algorithm?


module.exports = {
	
	tokenize : tokenize
	
};