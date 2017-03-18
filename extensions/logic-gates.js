(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
  ext.xor = function(a,b) {
		return (a!=b);
	};
  ext.xnor = function(a,b) {
		return (a==b);
	};
  
	ext.nor = function(a,b) {
		return !(a || b);
	};
  
  ext.nand = function(a,b) {
		return !(a && b);
	};
	
  ext.true = function() {return true};
  ext.false = function() {return false};
  
	var descriptor = {
		blocks: [
      			['b', '%b xor %b', 'xor',''],
            ['b', '%b xnor %b', 'xnor',''],
            ['b', '%b nor %b', 'nor',''],
            ['b', '%b nand %b', 'nand',''],
            ['b', 'true', 'true',''],
            ['b', 'false', 'false',''],
		],
	};
	ScratchExtensions.register("Logic Gates", descriptor, ext);
})({});