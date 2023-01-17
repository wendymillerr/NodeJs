
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

