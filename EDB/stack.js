class Stack{
    constructor(){
        this.data = []
        this.top = -1
    }

    push(value){
        this.top++
        this.data[this.top] = value
        return this.top
    }

    pop(){
        if (this.top < 0) return undefined
        poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

const stack = new Stack
stack.push('oi')
stack.push('tudo bem?')