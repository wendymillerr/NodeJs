
const {EventEmitter} = require ('events')// função no estilo classe

const evento = new EventEmitter() //evento é um objeto

evento.on('saySomething', (message) => {
    console.log('eu ouvi voce ' + message)
})//evento ta ligado pra receber a emissao. 1 argumentotem q ser o mesmo nome, o 2 é algo que vai fazer ao ouvir 

evento.once()//SÓ UMA VEZ
evento.emit('saySomething', 'wendy') // emitindo o evento 
evento.emit('saySomething', 'mayk')

