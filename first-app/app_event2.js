const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
// emitter.addListener é o mesmo comando que emitter.on

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})


emitter.on('loging', (arg) => {
    console.log('logando');
})


// emit: making a noise produce - sinalizando que algo aconteceu
// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});
emitter.emit('loging');
