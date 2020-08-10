// # Priority queue를 사용하여 heap sort를 하라.
import Priority_Queue from '../Datastructure/priorityqueue.js';

function heapsort(arr, option='greater') {
    const pq = new Priority_Queue(option);
    let newArr = [];
    for(let v of arr){
        pq.push(v);
    }
    while(!pq.empty()){
        newArr.push(pq.pop());
        //console.log(pq.heapq.store);
    }
    
    return newArr;
}


// @ Test
/*
let arr = [15, 10, 6, 3, 8, 20];
console.log(arr);
console.log(heapsort(arr)); // 3, 6, 8, 10, 15, 20
console.log(heapsort(arr,'less')); // 20, 15, 10, 8, 6, 3

let arr = [];
for(let i=0;i<10;i++){
    arr.push(Math.floor(Math.random()*10));
}
console.log(arr);
console.log(heapsort(arr));
console.log(heapsort(arr, 'less'));
*/