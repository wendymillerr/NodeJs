class Queue{
    constructor (){
        this.data = [];
    }

    enqueue (item){
        this.data.push(item)
        console.log(item + ' entrou na fila')
    }

    dequeue(){
        const item = this.data.shift()
        console.log(item + ' saiu da fila')
    }
}

const fila = new Queue;

fila.enqueue('mariana')
fila.enqueue('joao')
fila.enqueue('davi')
fila.dequeue()
fila.dequeue()
fila.dequeue()