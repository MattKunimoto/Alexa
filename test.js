// Testing around with the Alexa SDK

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
	var alexa = Alexa.handler(event, context, callback);
};

/*
var handlers = {
	
	'HelloWorldIntent': function () {
		this.emit(':tell', 'Hello World!');
	}
	
};
*/

/*
this.emit(':ask', 'What would you like to do?', 'Please say that again?');
*/

