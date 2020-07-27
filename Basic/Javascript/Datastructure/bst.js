// # Binary Search Tree 구현하기
// Implement Binary Search Tree (Method: insert, search, delete)
// Tree's structure is based on (double) linked list.
//import DNode from './double_linkedlist.js';
//import Node from  './linkedlist.js';

class TNode {
    constructor(data) {
        this._data = data;
        this._left_child = null;
        this._right_child = null;
    }

    get data() {
        return this._data;
    }

    get left_child() {
        return this._left_child;
    }

    get right_child() {
        return this._right_child;
    }

    set setData(data){
        this._data = data;
    }
}

class BST {
    constructor(data=null){
        this._root = new TNode(data);
    }

    get root() {
        return this._root;
    }

    set setRoot(data) {
        this._root = TNode(data);
    }

    search(data) {

    }

    insert(data) {
        // check root is null or not
        if(this.root.data === null)
            this._root = new TNode(data);
        // keep checking while find terminal node
        let curr = this.root;
        let parent = this.root
        while(curr){
            parent = curr;
            if(curr.data === data)
                return undefined;
            if(curr.data > data){
                if(!curr._left_child){
                    curr = new TNode(data);
                    parent._left_child = curr; 
                    return undefined;
                }
                curr = curr._left_child;
            } 
            else{
                if (!curr._right_child) {
                    curr = new TNode(data);
                    parent._right_child = curr;
                    return undefined;
                }
                curr = curr._right_child;
            }
        }
        console.log("Unhandled Error")
        return;
    }

    delete(data) {

    }
}

/*
============Test=============
let bst = new BST();
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst);
*/