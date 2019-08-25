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

function randVal(arr){
	if(arr.length==0){return Error("arr of length 0 passed to randVal");}
	return arr[rollRange(0,arr.length-1)];
}

module.exports = { 
	rollRange : rollRange,
	rollRepeat : rollRepeat
};
