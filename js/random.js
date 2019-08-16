// simple javascript random number generation library

function rollRange(lower,upper){
	return Math.floor((Math.random() * upper + lower));
}

function rollRepeat(repeat,lower,upper){
	var rollList = [];
	for(var i=0; i < repeat; i++){
		rollList.push(rollRange(lower,upper));	
	}
	return rollList;
}

module.exports = { 
	rollRange : rollRange,
	rollRepeat : rollRepeat
};
