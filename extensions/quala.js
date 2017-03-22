(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	
	ext.setTitle = function(t) {
        	document.title=t;
	};
	ext.alert = function(mes) {
        	alert(mes);
	};
	ext.windowOpen = function(url) {
        	window.open(url);
	};
	ext.windowSet = function(url) {
        	window.location = url
	};
	ext.prompt = function(mes) {
        	return prompt(mes);
	};
	ext.confirm = function(mes) {
        	return confirm(mes);
	};
	var descriptor = {
		blocks: [
			['r', 'prompt %s', 'prompt', "Hello"],
			['b', 'confirm %s', 'confirm', "OK?"],
			[' ', 'alert %s', 'alert', 'Hello'],
			[' ', 'set title to %s', 'setTitle', 'title'],
			[' ', 'open page %s in a new window', 'windowOpen', '//scratch.mit.edu'],
			[' ', 'open page %s', 'windowSet', '//scratch.mit.edu'],
		],
        	url: "https://QualaExt.github.io"
	};
	ScratchExtensions.register("Quala - Browser", descriptor, ext);
})({});

(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	ext.opGe = function(a,b) {
		return a >= b;
	};
	ext.opLe = function(a,b) {
		return a <= b;
	};
	ext.opNe = function(a,b) {
		return a!=b;
	};
	ext.sqrt = function(a,b) {
		return Math.pow(b, (1 / a));
	};
	ext.abs = function(a) {
		return Math.abs(a)
	};
	ext.power = function(base, exponent) {
		return Math.pow(base, exponent);
	};
	ext.inf = function() {
		return Infinity;
	};
	function gcd(a, b) { if (!b) { return a; } return gcd(b, a % b); };
	ext.gcd = function(a,b) {
		return gcd(a,b);
	};
	ext.eval = function(a) {
		return eval(a);
	};
	ext.pi = function() {
		return Math.PI;
	};
	var descriptor = {
		blocks: [
			['r', 'calculate %s', 'eval', "5+5"],
			['b', '%n ≥ %n', 'opGe', 2, 3],
			['b', '%n ≤ %n', 'opLe', 2, 3],
			['b', '%n ≠ %n', 'opNe', 2, 3],
			['r', '%n √ %n', 'sqrt', 3, 27],
			['r', '%n ^ %n', 'power', 2, 3],
			['r', 'GCD of %n and %n', 'gcd', 15, 5],
			['r', 'absolute value of %n', 'abs', "-3"],
			['r', '∞ infinity', 'inf'],
			['r', 'π pi', 'pi',],
		],
        	url: "https://QualaExt.github.io"
	};
	ScratchExtensions.register("Quala - Math", descriptor, ext);
})({});

(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	ext.substr = function(a,b,str) {
		return str.substr(a,b)
	};
	ext.upc = function(str) {
		return str.toLocaleUpperCase();
	};
	ext.lowc = function(str) {
		return str.toLocaleLowerCase();
	};
	ext.rev = function(str) {
		return str.split('').reverse().join('');
	};
	ext.con = function(a,b) {
		return (a.indexOf(b) > -1);
	};
	ext.index = function(a,b) {
		return b.indexOf(a);
	};
	var descriptor = {
		blocks: [
			['r', '%n to %n of %s', 'substr', 0, 1,"Hello"],
			['r', 'uppercase %s', 'upc', "Hello"],
			['r', 'lowercase %s', 'lowc', "Hello"],
			['r', 'reverse %s', 'rev', "Hello"],
			['b', '%s contains %s ?', 'con', "Hello","He"],
			['r', '%s in %s postion', 'index', "He","Hello"],
		],
        	url: "https://QualaExt.github.io"
	};
	ScratchExtensions.register("Quala - Strings", descriptor, ext);
})({});