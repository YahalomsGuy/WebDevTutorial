// run area


// setIval()


//to Respond to requests from Web interfaces (the front End)

// Load the HTTP module

const http = require('http');
const fs = require('fs');
const webServerPort = 8500
const server = http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'text/json' });

    fs.readFile('my.json', (err, content) => {
        console.log(content);
        response.write(content);
        response.end();
    });




});

server.listen(webServerPort);

console.log(`Server running at http://127.0.0.1:${webServerPort}`);





// functions area



function HiToConsole() {
    console.log('Hi From the Server');
}


function setIval() {
    setInterval(() => {
        HiToConsole()
    }, 2000);
}