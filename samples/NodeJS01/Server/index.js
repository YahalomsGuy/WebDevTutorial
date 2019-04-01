const cors = require('cors');
const express = require('express');
const fs = require('fs');
let app = express();
app.use(cors());
const webServerPort = 8500;

app.get('/', function(req, res) {

    res.status(200).send('Hello World');


    // fs.readFile('my.json', (err, content) => {
    //     console.log(content);
    //     response.write(content);
    //     response.end();
    // });
});


app.get('/guy', function(req, res) {
    res.send(`Guy's Sub-Folder!`)
});


app.listen(webServerPort);
console.log(`Server running at http://127.0.0.1:${webServerPort}`)




function HiToConsole() {
    console.log('Hi From the Server');
}


function setIval() {
    setInterval(() => {
        HiToConsole()
    }, 2000);
}