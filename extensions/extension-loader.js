(function(ext) {
	ext._shutdown = function() {};ext._getStatus = function() {return {status: 2, msg: 'Ready'};};
	ext.loader = function(a) {
		ScratchExtensions.loadExternalJS(a)
	};
	var descriptor = {
		blocks: [
			[' ', 'load extension from %s', 'loader', ""],
		],
	};
	ScratchExtensions.register("Extension Loader", descriptor, ext);
})({});