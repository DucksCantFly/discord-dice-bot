// simple javascript random number generation library

module.exports = { 

	rollRange: function(lower,upper) {return Math.floor((Math.random() * upper + lower))}

	};