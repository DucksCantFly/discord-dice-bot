// simple javascript random number generation library

module.exports = { 

	rollRange: function(lower,upper) {return Math.floor((Math.random() * upper + lower))}

	rollRepeat: function(repeat,lower,upper){
		var rollList = [];
		for(int i=0; i < repeat; i++){
			rollList.append(rollRange(lower,upper));	
		}
		return rollList;
	}
	
	};