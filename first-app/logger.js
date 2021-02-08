const url = 'http://mylogger.io/log';

function log(message){
    //Send a HTTP request
    console.log(message);
}


//se o modulo possuir só uma função/variavel/objeto que queira exportar, 
// utilizar só module.exports = object
module.exports = log;
//module.exports.endPoint = url;