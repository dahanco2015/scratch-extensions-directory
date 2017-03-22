(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	editor = document.getElementById('scratch')
	ext.reset = function(n) {
		editor.style.transform=""
	};
 	ext.rot = function(n) {
		editor.style.transform="rotate("+n+"deg)"
	};
	ext.tra = function(n,y) {
		editor.style.transform="translate("+n+"px,"+y+"px)"
	};
	
	var descriptor = {
		blocks: [
      			[' ', 'set rotation %n', 'rot', '90'],
			[' ', 'set translation x:%n y:%n', 'tra', '10','10'],
			[' ', 'reset', 'reset'],
		],
	};
	ScratchExtensions.register("Transform", descriptor, ext);
})({});