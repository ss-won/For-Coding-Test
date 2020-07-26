// # Double Linked-list 구현
//** some methods aren 't implemented that because they will be revised in other problem **

import { Node } from './linkedlist.js';

class DNode extends Node {
    constructor(data, prev=null, next = null) {
        super(data, next);
        this._prev = prev;
    }

    get prev() {
        return this._prev;
    }

    set setPrev(prev) {
        this._prev = prev;
    }
    
}

class DoubleLinkedlist {
    //head, tail
    constructor(data = null) {
        this._head = (data != null) ? new DNode(data) : data;
        this._tail = this._head;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    //Method - isEmpty(role : checking linkedlist empty)
    isEmpty() {
        return (this._head === null) ? true : false;
    }

    //Method - add(role : append node to linkedlist)
    add(data) {
        if (this.isEmpty()) {
            this._head = new DNode(data);
            this._next = this._head;
        } else {
            let curr = this._head;
            //head가 있다면 탐색 후 맨 끝에 추가
            while (curr.next) 
                curr = curr.next;
            let newNode = new DNode(data);
            curr.setNext = newNode;
            newNode.setPrev = curr;
            this._tail = newNode;
        }
    }

    //Method - print(role: print values ​​as they are in the linked dream)
    print() {
        let curr = this._head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

}

/* ============testing============*/
let node = new DNode(3);
console.log(node.data, node.prev, node.next, node);
let dll = new DoubleLinkedlist();
console.log(dll.isEmpty());
for (let i = 0; i < 10; i++) {
    dll.add(i);
}
dll.print();
console.log(dll._head, dll._tail);
/*==============================*/

export {
    Node,
    DoubleLinkedlist
};