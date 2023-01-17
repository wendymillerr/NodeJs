
const questions = [
    "o que eu aprendi hoje? ",
    "o que me deixou aborrecido?",
    "o que eu poderia fazer para melhorar?",
    "o que me deixou feliz hoje?",
    "quantas pessoas eu ajudei?",
]

const ask = (index = 0) => {
    return process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()


const answers = []
//on é alguma coisa que fica ouvindo eventos

process.stdin.on("data", data => {
    answers.push(data.toString().trim())

    if(answers.length <= questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()//senao processo fica sempre esperando entradas de dados
    }
    
})//"data" ele esta ouvindo quando tiver dados, e toda vez que for inserido dados ele vai rodar uma função


process.on('exit', () =>{
    console.log(`
        Olá, wendy

        o que vc aprendeu hoje foi:
        ${answers[0]}

        o que te aborreceu:
        ${answers[1]}

        o que voce pode melhorar:
        ${answers[2]}
        
        o que me deixou feliz hoje?
        ${answers[3]}
        
        quantas pessoas eu ajudei?
        ${answers[4]}
    
    
    `)
})