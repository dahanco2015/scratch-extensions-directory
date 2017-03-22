(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	
 	ext.conv = function(inputNumber,fromNumber,toNumber) {
    var base10 = parseInt(inputNumber, fromNumber);
    var final = base10.toString(toNumber);
		return final
	};
	
	var descriptor = {
		blocks: [
      			['r', '%s base %n to base %n', 'conv', '14', 10, 16],
		],
	};
	ScratchExtensions.register("Base Converter", descriptor, ext);
})({});