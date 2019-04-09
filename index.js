// index.js
var rp = require('request-promise')

exports call = function (webhookAction, apiKey, data) {

	console.log('callIFTTT triggered', requestType, data)

	var payload = {}

    // IFTTT Webhooks accept json keys in the format value1, value2... 
	for ( var i = 0; i < data.length; i++ ) {
		var k = "value" + i
		var v = data[i]

		payload[k] = v

	}

    rp({

        uri: 'https://maker.ifttt.com/trigger/' + requestType + '/with/key/' + apiKey,
        method: 'POST',
        formData: payload,
        json: true

    }).then(result => {

        return { success: true, result: result }

    }).catch(reason => {

        return { success: false, result: reason }
    
    })	

}