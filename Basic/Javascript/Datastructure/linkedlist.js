class Node {
    constructor(data, next=null){
        this._data = data;
        this._next = next;
    }

    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }

    set setNext(next) {
        this.next = next;
    }
}

 class Linkedlist {
     //head, curr, tail
    constructor(data=null){
        this._head = data && new Node(data);
        this._curr = data && this._head
    }

    get head() {
        return this._head;
    }

    get curr() {
        return this._curr;
    }

    //Method - add(role : append node to linkedlist)
    add(data) {
        if(!this._head){
            this._head = new Node(data);
        }
        else{
            //head가 있다면 탐색 후 맨 끝에 추가
            while(this._curr){
                this._curr = this._curr.next;
            }
            this._curr.next = new Node(data);
        }
    }

 }

//let node = new Node(3);
//console.log(node.data, node.next);

let linkedlist = new Linkedlist(0);
console.log(linkedlist.head);

linkedlist.add(3);
console.log(linkedlist.head.next);
console.log(linkedlist);
