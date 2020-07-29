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

    // Method search - return boolean result to check data exists
    search(data) {
        // check root is null or not
        if (!this.root){
            console.log("Nonexistent error");
            return false;
        }
        
        // keep checking while find terminal node
        let curr = this.root;
        while(curr){
            if(curr.data === data){
                return true
            }
            else if(curr.data > data){
                curr = curr.left_child;
            }
            else{
                curr = curr.right_child;
            }
        }
        return false;
    }

    insert(data) {
        // check root is null or not
        if(!this.root)
            this._root = new TNode(data);

        // keep checking while find terminal node
        // If it finds a suitable case for inserting data, it returns undefined.
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
        let curr = this.root;
        let parent = this.root;

        while(curr){
            if(curr.data === data) break;
            if(curr.data > data){
                parent = curr;
                curr = curr.left_child;
            }
            else{
                parent = curr;
                curr = curr.right_child;
            }
        }

        if(!curr){
            console.log("Unexistent Error");
            return;
        }

        //Case(1) : The target node is terminal node.
        if(!curr.left_child && !curr.right_child){
            if(parent.left_child === curr){
                parent._left_child = null;
            }
            else{
                parent._right_child = null;
            }
            return;
        }

        //Case(2) : The target node has one child.
        if(curr.left_child && !curr.right_child){
            if(parent.left_child === curr){
                parent._left_child = curr.left_child;
            }
            else{
                parent._right_child = curr.left_child;
            }
            return;
        }
        else if(!curr.left_child && curr.right_child){
            if(parent.left_child === curr){
                parent._left_child = curr.right_child;
            }
            else{
                parent._right_child = curr.right_child;
            }
            return;
        }

        //Case(3) : The target node has two children.
        if(curr.left_child && curr.right_child){
            let left_max_node = curr;
            let p_left_max = parent;

            while(left_max_node.right_child){
                p_left_max = left_max_node;
                left_max_node = left_max_node.right_child;
            }

            if (left_max_node.left_child) {
                p_left_max._right_child = left_max_node.left_child;
            }

            if(parent.left_child === curr){
                parent._left_child = left_max_node;
            }
            else {
                parent._right_child = left_max_node;
            }

            left_max_node._left_child = curr.left_child;
            left_max_node._right_child = curr.right_child;
            return;
        }
        
        console.log("Unhandeled Error");
        return;
    }
}

/*
============Test=============
*/
let bst = new BST();
console.log(bst.insert(5));
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst.insert(9));
console.log(bst.insert(1));
console.log(bst.search(8));
console.log(bst);

console.log(bst.delete(10));
console.log(bst.delete(8));
console.log(bst.search(8));
