// # 스택을 구현한다.
// Javascript의 Array로 구현

function Stack(){
    this.store = Array(0);

    this.push = (val) => {
        return this.store.push(val);
    };

    this.pop = () => {
        if(!this.isEmpty())
            return this.store.pop();
        console.log("Stack is empty!");
        return false;
    };

    this.isEmpty = () => {
        return (this.store.length === 0) ? true: false;
    }

    this.top = () => {
        if(!this.isEmpty())
            return this.store[this.store.length-1];
        return null;
    }
} 

export { Stack };

/*
// @ Test
const stack = new Stack();
stack.push(3);
stack.push(15);
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack);
*/