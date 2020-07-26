// # Linked-list 구현
//** some methods aren 't implemented that because they will be revised in other problem **

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
        this._next = next;
    }
}

class Linkedlist {
     //head
    constructor(data=null){
        this._head = (data!=null) ? new Node(data) : data;
    }

    get head() {
        return this._head;
    }

    //Method - isEmpty(role : checking linkedlist empty)
    isEmpty() {
        return (this._head===null) ? true : false;
    }
    
    //Method - add(role : append node to linkedlist)
    add(data) {
        if(this.isEmpty()){
            this._head = new Node(data);
        }
        else{
            let curr = this._head;
            //head가 있다면 탐색 후 맨 끝에 추가
            while(curr.next){
                curr = curr.next;
            }
            curr.setNext = new Node(data);
        }
    }

    //Method - print(role: print values ​​as they are in the linked dream)
    print() {
        let curr = this._head;
        while(curr){
            console.log(curr.data);
            curr = curr.next;
        }
    }

 }

/* ============testing============*/
//let node = new Node(3);
//console.log(node.data, node.next);
//let linkedlist = new Linkedlist();
//console.log(linkedlist.isEmpty());
//
//for(let i=0; i<10;i++){
//    linkedlist.add(i);
//}
//linkedlist.print();
/*==============================*/

export { Node, Linkedlist };