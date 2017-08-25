exports.handler = (event, context) => {
	
	// Alexa Skill New Session options
		// > Launch Request - invoking with just the invokation name
		// > Intent Request - invoking with an intent attached
		// > Session Ended Request - invoked when exiting skill
	
	try {	

		if (event.session.new) {
			// New Session
			console.log("NEW SESSION")
		}
		
		switch (event.request.type) {
			case "LaunchRequest":
				// Launch Request
				console.log('LAUNCH REQUEST')
				context.succeed(
					generateResponse(
						buildSpeechletResponse("Welcome to an Alexa Skill, this is running on a deployed lambda function", true),
						{}
					)
				)
				break;
				
			case "IntentRequest":
				// Intent Request
				console.log('INTENT REQUEST')
				break;
				
			case "SessionEndedRequest":
				// Session Ended Request
				console.log('SESSION ENDED REQUEST')
				break;
				
			default:
				context.fail('INVALID REQUEST TYPE: ${event.request.type}')
		}
	} catch(error) { context.fail('Exception: ${error}') }
}

// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {
	
	return {
		outputSpeech: {
			type: "PlainText",
			text: outputText
		},
		shouldEndSession: shouldEndSession
	}
	
}

generateResponse = (sessionAttributes, speechletResponse) => {
	
	return {
		version: "1.0",
		sessionAttributes: sessionAttributes,
		response: speechletResponse
	}
}