// # Binary Heap 구현하기(Max-Heap)
// This is the fragment to implement datastructure named heap.(heapify method)
import { rv_heapify, heapify } from './heapify.js';

function Heap(){
    'use strict';
    this.store = [null];
    this.root = this.store[1];

    this.insert = (data) => {
        if(this.store.length < 1)
            this.store = [null];
            this.root = this.store[1];
        this.store.push(data);
        this.root = (this.store.length <=1) ? this.store[1] : this.root;
        // + Reverse-Heapify
        rv_heapify(this);
    }

    this.pop = () => {
        const _root = this.root;
        this.store[1] = this.store[this.store.length-1];
        this.root = this.store[1];
        this.store.pop();
        // + Heapify
        heapify(this);
        return _root;
    }
}

export default Heap;

// @Test
const heap = new Heap();
heap.insert(15);
heap.insert(10);
heap.insert(6);
heap.insert(4);
heap.insert(8);
heap.insert(20);
console.log(heap); // 20 10 15 4 8 6
console.log(heap.pop()); // 20
console.log(heap); // 15 10 6 4 8

