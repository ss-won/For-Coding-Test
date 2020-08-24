// # 스택을 구현한다.
// Javascript의 Array로 구현

function Stack(){
    this.store = Array(0);
    this.top = null;

    this.push = (val) => {
        this.store.push(val);
        this.top = this.store[this.store.length - 1];
    };

    this.pop = () => {
        if(!this.isEmpty()){
            let returned = this.store.pop();
            this.top = this.store[this.store.length - 1]
            return returned;
        }
        console.log("Stack is empty!");
        return false;
    };

    this.isEmpty = () => {
        return (this.store.length === 0) ? true: false;
    }

    this.size = () => {
        return (this.store.length);
    }
} 

export { Stack };

/*
// @ Test
const stack = new Stack();
stack.push(3);
stack.push(15);
console.log(stack.top);
console.log(stack.isEmpty());
console.log(stack);
*/