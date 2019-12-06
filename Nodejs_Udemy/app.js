const path = require('path');

const pathObj = path.parse(__filename);

console.log(pathObj);


const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("total Memory "+totalMemory+" free Memory "+freeMemory);

//template string - ES 6 feature

console.log(`total Memory ${totalMemory} free Memory ${freeMemory}`)

console.log(os.hostname('window'));
//==========================================

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./',function(err,files){
    if(err) console.log(err);
    else console.log('Result',files);
})

//=========================================
console.log('---------------------------');
const EventEmitter = require('events');

const Logger = require('./logger');
const logger =  new Logger();

//register a listener
logger.on('messageLogged',function(arg){
    console.log('listener called',arg);
});

logger.log('message');

//=========================================
const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection ....');
});

server.listen(3000);

console.log('Listening on port 3000...');




