(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	
 	ext.user = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.username;
	};
	
	ext.teacher = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.is_educator;
	};
	
  	ext.student = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.is_student;
	};
	
  	ext.pic = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.thumbnail_url;
	};
	
  	ext.picOpen = function() {
		window.open(Scratch.INIT_DATA.LOGGED_IN_USER.model.thumbnail_url);
	};
	
  	ext.id = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.id;
	};
	
   	ext.profileOpen = function() {
		window.open("//scratch.mit.edu"+Scratch.INIT_DATA.LOGGED_IN_USER.model.profile_url);
	};
	
  	ext.profile = function() {
		return "//scratch.mit.edu"+Scratch.INIT_DATA.LOGGED_IN_USER.model.profile_url;
	};
	
	ext.confirm = function() {
		return Scratch.INIT_DATA.LOGGED_IN_USER.model.has_outstanding_email_confirmation
	};
	
	var descriptor = {
		blocks: [
      			['r', 'username', 'user',''],
      			['r', 'user ID', 'id',''],
			['b', 'is teacher?', 'teacher',''],
      			['b', 'is student?', 'student',''],
			['b', 'confirmed email?', 'confirm',''],
      			['r', 'profile pic URL', 'pic',''],
      			[' ', 'open profile pic', 'picOpen'],
      			['r', 'profile URL', 'profile',''],
      			[' ', 'open profile', 'profileOpen'],
		],
	};
	ScratchExtensions.register("User Information", descriptor, ext);
})({});