// web example

// Load HTTP module
var http = require("http"),
  fs = require('fs');;
const hostname = '0.0.0.0';
const port = 1234;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  fs.readFile('web_data.txt', function readData(err, web_data) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(web_data);
})
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
