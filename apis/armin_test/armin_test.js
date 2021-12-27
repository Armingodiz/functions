exports.handler = async function(event, context) {
  var response = {
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json"
  },
  "isBase64Encoded": false,
  "multiValueHeaders": { 
    "X-Custom-Header": ["My value", "My other value"],
  },
  "body": "received body is " + event
}
return response
}
