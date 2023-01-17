
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