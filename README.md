# IFTTT Webhook Resolver

This module allows you to easily make calls to IFTTT (see IFTTT.com).

Webhooks are passed as SSL encrypted JSON payloads. 

Install the package with npm:
```npm i ifttt-webhook-resolver```

## 1. IFTTT Payloads
IFTTT requires that the payloads are formatted as shown below:

```
payload : {
	value1 : "String",
	value2 : "String",
	value3 : "String"	
}
```

As of April 2019, webhooks are limited to three value fields. 

For more information about IFTTT webhooks visit the docs here:

https://help.ifttt.com/hc/en-us/articles/115010230347-The-Webhooks-Service

For your API key, visit this link: 
https://ifttt.com/services/maker_webhooks/settings

The API key is shown in the URL field 
```URL https://maker.ifttt.com/use/ < Your API Key is Here >```


## 2. Usage
Install the module with 
```npm install ifttt-webhook-resolver```

You can then add the following line to the top of any node.js module:
```const ifttt = require('ifttt-webhook-resolver')```

You can now call IFTTT webhooks by passing an array of values to the resolve call as shown in the example below.

## 3. Example

```
var ifttt = require('ifttt-webhook-resolver')

webhookAction 	= "test"
apikey 			= "< key from 1. above >"
data 			= 	[
						"string1",
						"string1",
						"string2"
					]

ifttt.call(webhookAction, apiKey, data).then(function (result) {
		console.log('result')
	})

```

The function will return a payload formatted as shown below:

```
result: {
	success: < true / false >,
	result: < return data from IFTTT >
}
```


