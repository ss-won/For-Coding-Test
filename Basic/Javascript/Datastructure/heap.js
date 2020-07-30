// # Heap 구현하기( heapify 과정 생략된 상태 )
// This is the fragment to implement datastructure named heap.(heapify method)

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
    }

    this.pop = () => {
        const _root = this.root;
        this.store[1] = this.store[this.store.length-1];
        this.root = this.store[1];
        this.store.pop();
        // + Heapify
        return _root;
    }
}

export default Heap;

/* @Test
const heap = new Heap();
heap.insert(10);
heap.insert(6);
heap.insert(20);
console.log(heap.pop());
console.log(heap);
*/
