const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        //Send a HTTP request
        console.log(message);
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
    
}

//se o modulo possuir só uma função/variavel/objeto que queira exportar, 
// utilizar só module.exports = object
module.exports = Logger;
//module.exports.endPoint = url;