//setTimeout rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)

let timer = setTimeout(finished, timeOut)
clearTimeout(timer) // cancela o timeOut