//function sayHello(name){
//    console.log('Hello ' + name);
//}

// sayHello('Nasr')
// var hello = function(){
// console.log('say hello global variable');
// }

// const logger = require('./logger');
// logger.log('message');

// OS module
const os = require('os');

var totalMem = os.totalmem(); 
var freeMem = os.freemem();

console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);

// HTTP Module
const http = require('http');
// const server = http.createServer();
// server.on('connection', (socket)=>{
//     console.log('New connection .....!');
// })

const server = http.createServer((req,res)=>{

     if (req.url == '/'){
         res.write('Hello world');
         res.end();
     }

     if (req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }

});

server.listen(3000);
console.log('This servers listens to port 3000 ...');