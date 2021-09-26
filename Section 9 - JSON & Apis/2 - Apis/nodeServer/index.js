/**
 * Primaey file for the API
 * 
 */

// Dependencies
var http = require('http');
// var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var config = require('./lib/config');
// var fs = require('fs');
var handlers = require('./lib/handlers');
var helpers = require('./lib/helpers');

// Instantiate the HTTP server
var httpServer = http.createServer(function (req, res) {
    var resHeaders = {
        "Access-Control-Allow-Origin":"*",
        "Content-Type": "text/plain"
    }
        
    // Get the URL and parse it
    var headers = req.headers;
    var host = headers.host;
    var parsedUrl = new URL(host+req.url);
    // var parsedUrl = url.parse(req.url, true);
    
    // Get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/[0-9]+[\/]/, '').replace(/^\/+|\/+$/g, '');


    // Get the HTTP method
    var method = req.method.toLowerCase();

    // Get the Queery string as Object
    var queryStringObject = new URLSearchParams(parsedUrl.search);

    // Get the payload
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function (data) {
        buffer += decoder.write(data);
    });

    req.on('end', function () {
        buffer += decoder.end();

        // Chose the handler this request should go to, If one not found chose the not found handler
        var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

        // Consruct the data object to send to the handler 
        var data = {
            'trimmedPath': trimmedPath,
            'queryStringObject':  queryStringObject,
            'method': method,
            'headers': headers,
            'payload': helpers.parseJsonToObject(buffer)
        };

        
        // Route the request to the handler specified in the router
        chosenHandler(data, function (statusCode, payload) {
            // Use the status code called back by the handler, or default to an empty object
            statusCode = typeof(statusCode) === 'number' ? statusCode : 200;
            payload = typeof(payload) == 'object' ? payload : {};

            // Convert the payload to a string
            var payloadString = JSON.stringify(payload);

            // Return the response

            // old header params location
            // res.setHeader('Content-Type', 'application/json');

            res.writeHead(statusCode, resHeaders);
            res.end(payloadString);

            // Log the request path
            console.log('Returing this response: ', statusCode, payloadString);
        });

    });
});


// Start the server
httpServer.listen(config.httpPort, function () {
    console.log('The server is listening on port '+config.httpPort);
});





// Define a request router
var router = {
    'ping': handlers.ping,
    'requests':  handlers.requests
};