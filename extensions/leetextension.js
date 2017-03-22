function leet(a) {
	q=a;
	x=0;
	q=q.toLocaleUpperCase();
	while (x<q.length) {
		q=q.replace('ATE','8').replace('O','0').replace('I','i').replace('S','5').replace('E','3').replace('A','4').replace('T','7');
		x=x+1;
	}
	return q;
}
function xleet(a) {
	q=a;
	x=0;
	q=q.toLocaleUpperCase();
	while (x<q.length) {
		q=q.replace('K','|<').replace('L','|_').replace('B','|3');
		q=leet(q);
		x=x+1;
	}
	return q;
}
(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	ext.leet = function(a) {
		return leet(a)
	};
	ext.xleet = function(a) {
		return xleet(a)
	};
	var descriptor = {
		blocks: [
			['r', '%s to leetspeak', 'leet', "Hello"],
			['r', '%s to extreme leetspeak', 'xleet', "Hello"],
		],
	};
	ScratchExtensions.register("133tXt3nSHi0N", descriptor, ext);
})({});