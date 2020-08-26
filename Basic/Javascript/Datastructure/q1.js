// # Array를 사용하여 Queue를 구현한다.

function Queue(){
    this.store = Array(0);
    this.size = 0;

    this.isEmpty = () => {
        (this.size === 0) ? true: false;
    }

    this.enqueue = (data) => {
        this.store.push(data);
        this.size = this.store.length;
    }

    this.dequeue = () => {
        if(!this.isEmpty()){
            let cur = this.store.shift();
            this.size = this.store.length;
            return cur;
        }
        return undefined;
    }

    this.top = () => {
        return (this.isEmpty()) ? undefined : this.store[0];
    }
}

/*
// @ Test
let q = new Queue();
for(let i=0;i<10;i++){
    q.enqueue(Math.floor(Math.random()*10));
}
console.log(q);
console.log(q.dequeue());
console.log(q.top());
console.log(q.size);
*/