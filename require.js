//modulos nativos

const path = require('path')

console.log(path.basename(__filename))

//módulos criados por nós

const myModule = require('./exports')

console.log(myModule)