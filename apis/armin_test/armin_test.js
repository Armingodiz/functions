exports.handler = async function(event, context) {
 /* const requestBody = JSON.parse(event.body);*/
  var response = {
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json"
  },
  "isBase64Encoded": false,
  "multiValueHeaders": { 
    "X-Custom-Header": ["My value", "My other value"],
  },
  "body": event.payload+ " received body is " + event.name /*+ " second method: " + requestBody.name*/
}
return response
}
