module.exports = function getFlag(string){
    
    let index = process.argv.indexOf(string) + 1
    console.log(process.argv[index-1])
    if(index != -1){
        console.log(process.argv[index])
        return process.argv[index]
    }
    return 'não há essa flag aqui'
}