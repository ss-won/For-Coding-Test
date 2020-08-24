// # Stack에 저장된 값들 중 최소값을 반환하는 minStack() 함수를 구현한다.
import { Stack } from './s3.js';

function minStack(stack){
    let min = Number.POSITIVE_INFINITY;
    let tmp = new Stack();
    tmp = stack;
    while(tmp.size()){
        let curr = tmp.pop();
        if(min > curr) 
            min = curr;
    }
    return min;
}

/*
// @ Test
const stack = new Stack();
for(let i=0;i<10;i++){
    stack.push(Math.round(Math.random()*10));
}
console.log(stack);
console.log(minStack(stack));
*/