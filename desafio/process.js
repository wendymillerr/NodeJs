const getFlag = require('./export')

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`)