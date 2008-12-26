describe('SubtleController', {

	'before all': function(){
		controller = new SubtleController();
	},

	'after all': function(){
		controller = null;
	},
	
	'should exist'                 : function(){ value_of(SubtleController).should_not_be_undefined(); },
	
	'should implement get'         : function(){ value_of(typeof controller.get         ).should_be('function'); },
	'should implement set'         : function(){ value_of(typeof controller.set         ).should_be('function'); },
	'should implement updateOne'   : function(){ value_of(typeof controller.updateOne   ).should_be('function'); },
	'should implement update'      : function(){ value_of(typeof controller.update      ).should_be('function'); },
	'should implement addBindings' : function(){ value_of(typeof controller.addBindings ).should_be('function'); },
	'should implement addBinding'  : function(){ value_of(typeof controller.addBinding  ).should_be('function'); },
	
	'should implement addBinding': function(){
		value_of(typeof controller.addBinding).should_be('function');
	},

	'':$empty
});



describe('SubtleController.Hash', {

	'before all': function(){
		controller = new SubtleController.Hash();
	},

	'after all': function(){
		controller = null;
	},

	'should exist': function(){ value_of(SubtleController.Hash).should_not_be_undefined(); },
	
	'should implement get'         : function(){ value_of(typeof controller.get         ).should_be('function'); },
	'should implement set'         : function(){ value_of(typeof controller.set         ).should_be('function'); },
	'should implement updateOne'   : function(){ value_of(typeof controller.updateOne   ).should_be('function'); },
	'should implement update'      : function(){ value_of(typeof controller.update      ).should_be('function'); },
	'should implement addBindings' : function(){ value_of(typeof controller.addBindings ).should_be('function'); },
	'should implement addBinding'  : function(){ value_of(typeof controller.addBinding  ).should_be('function'); },
	
	'':$empty
});



describe('SubtleController.Array', {

	'before all': function(){
		controller = new SubtleController.Array();
	},

	'after all': function(){
		controller = null;
	},

	'should exist': function(){ value_of(SubtleController.Array).should_not_be_undefined(); },
	
	// Basic controller functionality
	'should implement get'         : function(){ value_of(typeof controller.get         ).should_be('function'); },
	'should implement set'         : function(){ value_of(typeof controller.set         ).should_be('function'); },
	'should implement updateOne'   : function(){ value_of(typeof controller.updateOne   ).should_be('function'); },
	'should implement update'      : function(){ value_of(typeof controller.update      ).should_be('function'); },
	'should implement addBindings' : function(){ value_of(typeof controller.addBindings ).should_be('function'); },
	'should implement addBinding'  : function(){ value_of(typeof controller.addBinding  ).should_be('function'); },
	
	// Array specific functionality
	'should implement getSelection': function(){ value_of(typeof controller.getSelection  ).should_be('function'); },
	'should implement setSelection': function(){ value_of(typeof controller.setSelection  ).should_be('function'); },
	
	'':$empty

});



