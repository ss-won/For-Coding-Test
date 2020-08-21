// # Stack 두 개로 Queue를 구현한다.
// 입력 Stack, 출력 Stack을 만들어 보관한다.
// 구조만 보면 Deque와 같다.
import { Stack } from './s3.js';

function Queue(){
    this.input = new Stack();
    this.output = new Stack();
    this.size = 0;

    this.isEmpty = () => {
        (this.input.store.length === 0) ? true : false;
    }

    this.enqueue = (data) => {
        this.input.push(data);
        this.size = this.input.store.length;
    }

    this.dequeue = () => {
        let returned = 0;
        let tmp = [];

        if(this.isEmpty()){
            return false;
        }

        /* move input stack data to ouput stack */
        for(let i=0;i<this.size;i++){
            let data = this.input.pop();
            this.output.push(data);
        }
        /*-------------------------------------*/

        /* pop returned data in output stack */
        returned = this.output.pop();
        /*----------------------------------*/

        /* move remainder to input stack */
        while(!this.output.isEmpty()){
            tmp = [...tmp,this.output.pop()];
        }
        tmp.reverse();
        while(tmp.length > 0){
            this.input.push(tmp.pop());
            console.log(this.input);
        }
        /*------------------------------*/
        this.size = this.input.store.length;
        return returned;
    }
}

/*
// @ Test
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue());//1
console.log(q);
*/