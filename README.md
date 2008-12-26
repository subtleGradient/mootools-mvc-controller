***Still a work in progress, not released yet***

SubtleController
================

What's it for?
--------------
Data binding! Keep many objects up-to-date without any of your objects knowing about eachother.


How it works
------------

### Setup
1. Create some objects that implement the controller client api
	
	* Read/Write objects must implement get, set, Events & the 'change' event

			readWriteObject1 = {
				get: function(){},
				set: function(){},
				addEvent: function(type){}
			}
			readWriteObject2 = {
				get: function(){},
				set: function(){},
				addEvent: function(type){}
			}
	

	* Read only objects have to implement set with both a key and value argument

			readOnlyObject1 = { set: function(key,value){} }
			readOnlyObject2 = { set: function(key,value){} }

	* Custom functions only have to support a single argument

			customFunction1 = function(value){};
			customFunction2 = function(value){};

2. Create a controller

		var myController = new SubtleController();

3. Bind your objects to the controller

		myController.addBinding(readWriteObject1, 'controllerKey', 'readWriteObject1Key');
		myController.addBinding(readWriteObject2, 'controllerKey', 'readWriteObject2Key');
		myController.addBinding(readOnlyObject1, 'controllerKey', 'readOnlyObject1Key');
		myController.addBinding(readOnlyObject2, 'controllerKey', 'readOnlyObject2Key');
		myController.addBinding(customFunction1, 'controllerKey');
		myController.addBinding(customFunction2, 'controllerKey');

### Automatic Updates
1. Modify one of your read/write objects

		readWriteObject1.set('readWriteObject1Key', 'some random value');

2. Commit your changes by firing the change event  
*optionally, you may pass a string, or array of strings, for the keys that have changed*

		readWriteObject1.fireEvent('change', 'readWriteObject1Key');
	
3. The Controller updates itself with the updated values. **It does this itself**

		myController.set('controllerKey', readWriteObject1.get('viewKey'));

4. The Controller updates all the bindings. **It does this itself**

		readWriteObject1.set('readWriteObject1Key', myController.get('controllerKey'));
		readWriteObject2.set('readWriteObject2Key', myController.get('controllerKey'));
		readOnlyObject1.set('readOnlyObject1Key', myController.get('controllerKey'));
		readOnlyObject2.set('readOnlyObject2Key', myController.get('controllerKey'));

