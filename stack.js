class Stack {
    constructor(){
        this.top = -1 ;
        this.stack = [];
    }
    push(x){
        this.top++;
        this.stack[this.top]= x;
    }
    pop(x){
        this.top--;
    }
    size(){
        return this.stack.length;
    }
    getTop(){
        return this.stack[this.top];
    }
    stks(){
        console.log(this.stack);
    }

}