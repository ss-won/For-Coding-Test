//# Priority-Queue 구현하기(heap 자료구조 이용)
import { MaxHeap, MinHeap } from '../Datastructure/heap.js';
import { mx_rv_heapify, mn_rv_heapify, mx_heapify, mn_heapify } from './heapify.js';

// less : MaxHeap, greater : MinHeap
function Priority_Queue(stand='greater'){

    // # default status : MinHeap
    if(stand === 'less'){
        this.heapq = new MaxHeap();
    }//MaxHeap
    else if(stand === 'greater'){
        this.heapq = new MinHeap();
    }//MinHeap
    else{
        console.log("Unhandled Error");
        return;
    }

    // # Method front : returns front element in prioirty queue.
    this.front = () => {
        return this.heapq.root;
    }

    // # Method push : push a value in priority queue.
    this.push = (val) => {
        this.heapq.push(val);
    }

    // # Method empty : returns a boolean result that checks if the priority queue is empty.
    this.empty = () => {
        return (this.heapq.store.length === 1) ? true : false;
    }

    // # Method size : return size of priority queue.
    this.size = () => {
        return this.heapq.store.length - 1;
    }

    // # Method pop : remove a front element in priority queue and return it.
    this.pop = () => {
        return this.heapq.pop();
    }

    this.set = (key, newdata) => {
        let cur = 1;
        while(cur <= this.size()){
            if(this.heapq.store[cur][1] === key){
                this.heapq.store[cur][0] = newdata;
                
                if( stand === 'greater'){
                    let cid = cur;
                    let pid = parseInt(cid / 2, 10);
                    while (pid >= 1) {
                        if (this.heapq.store[pid][0] > this.heapq.store[cid][0]) {
                            let tmp = this.heapq.store[pid];
                            this.heapq.store[pid] = this.heapq.store[cid];
                            this.heapq.store[cid] = tmp;
                        }
                        cid = pid;
                        pid = parseInt(cid / 2, 10);
                    }
                    this.heapq.root = this.heapq.store[1];
                }
                else {
                    let cid = cur;
                    let pid = parseInt(cid / 2, 10);
                    while (pid >= 1) {
                        if (this.heapq.store[cid][0] > this.heapq.store[pid][0]) {
                            let tmp = this.heapq.store[pid];
                            this.heapq.store[pid] = this.heapq.store[cid];
                            this.heapq.store[cid] = tmp;
                        }
                        cid = pid;
                        pid = parseInt(cid / 2, 10);
                    }
                    this.heapq.root = this.heapq.store[1];
                }
            }
            cur++;
        }
        return false;
    }

    this.get = (key) => {
        let cur = 1;
        while(cur <= this.size()){
            if(this.heapq.store[cur][1] === key){
                return this.heapq.store[cur][0];
            }
            cur++;
        }
        return undefined;
    }

}

export default Priority_Queue;


/*
// @ Test
const pq = new Priority_Queue();
pq.push(15);
pq.push(10);
pq.push(6);
pq.push(4);
pq.push(8);
pq.push(20);
console.log(pq.size());// 6
console.log(pq.pop());
console.log(pq.size());// 5
console.log(pq.pop()); // 4
console.log(pq.size()); // 5
*/

