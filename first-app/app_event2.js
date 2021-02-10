const EventEmitter = require('events');

// Register a listener
// emitter.addListener é o mesmo comando que emitter.on


const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

logger.log('mensagem principal');