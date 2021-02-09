const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
// emitter.addListener é o mesmo comando que emitter.on

emitter.on('messageLogged', function(){
    console.log('Listener called');
})


// emit: making a noise produce - sinalizando que algo aconteceu
// Raise an event
emitter.emit('messageLogged');

// o addListener ou on só funcionam de houver um emit. Um manda o sinal, o outro emite esse sinal para o node.
// os comandos emit sempre aparecem no final, mas são construídos antes. Pra que se pense no que vai fazer. para então criar a ação