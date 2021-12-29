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
  "body": "from " + event.body.name + " received body is " + event.body + "\n received headers: " + event.headers + " \n request method and path: " + event.method + ", " + event.path  /*+ " second method: " + requestBody.name*/
}
return response
}
