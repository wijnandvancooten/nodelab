var http = require("http");

http.createServer(function(request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, { 'Content-Type': 'text/plain' });

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(5555);

console.log ('server running http://127.0.0.1:5555/')

// read a txt file
var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

const name = process.argv[2] + ' ' + process.argv[3];
console.warn(`Goodmorning ${name}, welcome back`);

/* // alternatief om naam door te geven. Door onderstaande script te gebruiken krijg je geen undifined bij het niet doorgeven van twee waardes.
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});


if (process.argv[2]) {
    var name = process.argv[2];
    if (process.argv[3]) {
        name = name + ' ' + process.argv[3];
    }
    console.warn(`Goodmorning ${name}, welcome back`);
}*/