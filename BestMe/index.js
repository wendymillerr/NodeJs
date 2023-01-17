
const questions = [
    "o que eu aprendi hoje? ",
    "o que me deixou aborrecido?",
    "o que eu poderia fazer para melhorar?",
    "o que me deixou feliz hoje?",
    "quantas pessoas eu ajudei?",
]

const ask = (index = 0) => {
    return process.stdout.write(questions[index] + "\n\n")
}

ask()

//on é alguma coisa que fica ouvindo eventos

process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + '\n')//transforma em string e tira espaços vazios
    process.exit()//senao processo fica sempre esperando entradas de dados
})//"data" ele esta ouvindo quando tiver dados, e toda vez que for inserido dados ele vai rodar uma função

