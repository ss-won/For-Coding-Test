// # Binary Heap 구현하기(Max-Heap)
// This is the fragment to implement datastructure named heap.(heapify method)
import { mx_rv_heapify, mn_rv_heapify, mx_heapify, mn_heapify } from './heapify.js';

function MaxHeap(){
    'use strict';
    this.store = [null];
    this.root = this.store[1];

    this.push = (data) => {
        if(this.store.length < 1){
            this.store = [null];
            this.root = this.store[1];
        }
        this.store.push(data);
        this.root = this.store[1];
        // + Reverse-Heapify
        mx_rv_heapify(this);
    }

    this.pop = () => {
        const _root = this.root;
        let curr = this.store.pop();
        if (this.store.length > 1){
            this.store[1] = curr;
            // + Heapify
            mx_heapify(this);
        }
        return _root;
    }
}

// # Binary Heap 구현하기(Min-Heap)
function MinHeap(){
    'use strict';
     this.store = [null];
     this.root = this.store[1];

     this.push = (data) => {
            if (this.store.length < 1){
                this.store = [null];
                this.root = this.store[1];
            }
            this.store.push(data);
            this.root = this.store[1];
            // + Reverse-Heapify
            mn_rv_heapify(this);
     }
    this.pop = () => {
        const _root = this.root;
        let curr = this.store.pop();
        if (this.store.length > 1)
            this.store[1] = curr;
        // + Heapify
        mn_heapify(this);
        return _root;
    }
}

export { MaxHeap, MinHeap };
/*
// @Test
let heap = new MaxHeap();
heap.push(15);
heap.push(10);
heap.push(6);
heap.push(4);
heap.push(8);
heap.push(20);
console.log(heap); // 20 10 15 4 8 6
console.log(heap.pop()); // 20
console.log(heap); // 15 10 6 4 8


heap = new MinHeap();
heap.push(15);
heap.push(10);
heap.push(6);
heap.push(4);
heap.push(8);
heap.push(20);
console.log(heap); // 4 6 10 15 8 20
console.log(heap.pop()); // 4
console.log(heap); // 6 8 10 15 20
console.log(heap.pop()); // 4
console.log(heap);
*/