var url = "http://mylogger.io/log";
const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        //send an http request
        console.log(message);
    //raise an event
    this.emit('messageLogged',{id:1,url:'https://'});
    }
}



module.exports = Logger;