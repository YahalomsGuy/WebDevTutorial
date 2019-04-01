// run area


// setIval()


//to Respond to requests from Web interfaces (the front End)

//Load the HTTP module
const http = require('http');
const webServerPort = 8500
const server = http.createServer((req, res) => {
    res.end(`
        <body>
            <input type="text" name="fname" /><br />
            <input type="number" name="age" /><br />
            <input type="file" name="photo" /><br />
            <div><button>Save</button></div>
            <a href="https://www.yahaloms.com" target="_blank">To Yahalom Web-Site</a>
        </body>
    `);
});
server.listen(webServerPort);

console.log(`Server running at http://127.0.0.1:${webServerPort}`);



// const http = require('http');
// const webServerPort = 8500
// const server = http.createServer((request, response) => {

//     response.end(` 
//         <!doctype html>
//         <html>
//             <head>
//                 <title> From Node.JS < /title> 
//             </head>
//             <body>
//                 <div> Hello World </div> 
//                 <div><input type = "text" > </div> 
//                 <button> Run </button>
//             </body>
//         </html>
//     `);

// });

// server.listen(webServerPort);

// console.log(`Server running at http://127.0.0.1:${webServerPort}`);





// functions area



function HiToConsole() {
    console.log('Hi From the Server');
}


function setIval() {
    setInterval(() => {
        HiToConsole()
    }, 2000);
}