// # Linked-list 구현
//** some methods aren 't implemented that because they will be revised in other problem **

class Node {
    constructor(data, next = null) {
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
    constructor(data = null) {
        this._head = (data != null) ? new Node(data) : data;
    }

    get head() {
        return this._head;
    }

    //Method - isEmpty(role : checking linkedlist empty)
    isEmpty() {
        return (this._head === null) ? true : false;
    }

    //Method - add(role : append node to linkedlist)
    add(data) {
        if (this.isEmpty()) {
            this._head = new Node(data);
        } else {
            let curr = this._head;
            //head가 있다면 탐색 후 맨 끝에 추가
            while (curr.next) {
                curr = curr.next;
            }
            curr.setNext = new Node(data);
        }
    }

    //Method - print(role: print values ​​as they are in the linkedlist)
    print() {
        let curr = this._head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    //Method - print(role: remove (nth or any) node in the linkedlist)
    remove(node) {
        if (typeof node === 'object') {
            let cur = this.head;
            if (cur === node) {
                //head일때
                this._head = cur.next;
                cur._next = null;
            }
            while (cur.next && cur.next !== node) {
                console.log(cur);
                cur = cur.next;
            }
            if (cur.next)
                cur._next = cur.next.next;
        } else if (typeof node === 'number') {
            //head : 0번째
            let i = 0;
            let cur = this.head;
            if (node === i) {
                //head일때,
                this._head = cur.next;
                cur._next = null;
            }
            while (i !== node - 1) {
                if (!cur.next) {
                    return false;
                }
                cur = cur.next;
                i++;
            }
            cur._next = cur.next.next;
        }
    }

}

export {
    Node,
    Linkedlist
};

/* ============testing============*/
//let node = new Node(3);
//console.log(node.data, node.next);
//let linkedlist = new Linkedlist();
//console.log(linkedlist.isEmpty());
//
//for(let i=0; i<10;i++){
//    linkedlist.add(i);
//}
//
//linkedlist.print();
//linkedlist.remove(3);
//console.log("\n")
//linkedlist.print();
//console.log(linkedlist.head);
//
//linkedlist.remove(0);
//console.log("\n")
//linkedlist.print();
//console.log(linkedlist.head);
/*==============================*/