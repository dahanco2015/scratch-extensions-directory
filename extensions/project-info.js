(function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	
 	ext.title = function() {
		return Scratch.INIT_DATA.PROJECT.model.title;
	};
  ext.shared = function() {
    return Scratch.INIT_DATA.PROJECT.model.isPublished;
  }
  ext.creator = function() {
    return Scratch.INIT_DATA.PROJECT.model.creator;
  }
  ext.id = function() {
    return Scratch.INIT_DATA.PROJECT.model.id;
  }
  ext.comEn = function() {
    return Scratch.INIT_DATA.PROJECT.model.comments_allowed;
  }
	
	var descriptor = {
		blocks: [
      			['r', 'project title', 'title',''],
            ['r', 'project creator', 'creator',''],
            ['r', 'project ID', 'id',''],
            ['b', 'project shared?', 'shared',''],
            ['b', 'comments enabled?', 'comEn',''],
		],
	};
	ScratchExtensions.register("Project Information", descriptor, ext);
})({});