// # 많은 수 중 top 10을 구한다.
import Priority_Queue from './priorityqueue.js';

function getTopten(arr){
    const pq = new Priority_Queue('less');
    let topten = [];
    // O(N*logN)
    for(let v of arr){
        pq.push(v)
    }
    // O(logN)
    for(let i=0;i<10;i++){
        topten.push(pq.pop());
    }

    return topten;
}

/*
// @ Test
let example = [];
for(let i=0;i<100;i++){
    example.push(Math.floor(Math.random()*100));
}
console.log(example);
console.log(getTopten(example));
console.log(example.sort((a,b)=>b-a).filter((v,i)=>i<10));
*/