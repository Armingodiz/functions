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
  "body": "from " + event.body.name + " received body is " + JSON.stringify(event.body) + " received headers: "
   + JSON.stringify(event.headers)  + " request method and path: " + event.method + ", " + event.path + " and one example header: " + event.headers.Connection
}
return response
}
