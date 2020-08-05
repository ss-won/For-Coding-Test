// # 링크드리스트에서 k번째 원소를 찾는다.
import { DoubleLinkedlist } from "./double_linkedlist.js";
import { Linkedlist } from "./linkedlist.js";

// (1) Linked list를 원형 링크드리스트로 만들어, (0-양의 정수)이면 head부터 시작하여 값을 찾아낸다.
Linkedlist.prototype.search_node = function(k){
        let stand = this.head
        let num = Math.abs(k);
        if (!k) return stand.data;
        for(let i=num;i>0;i--){
            stand = stand.next;
        }
        return (stand) ? stand.data : null;
}

// (2) Double linked list를 활용하여, (0-양의 정수)이면 앞쪽부터 음의정수면 끝에서부터의 offset 값으로 찾아낸다.
// 원형 링크드리스트는 일반 링크드리스트를 활용하기 때문에 조금 다르나, 
// 원형 링크드 리스트와 비슷한 형태로 head-tail이 이어져 원형을 이루고 있다.
DoubleLinkedlist.prototype.search_node = function(k){
        this.head._prev = this.tail;
        let stand = this.head;
        let num = Math.abs(k);
        if (!k) return stand.data;
        for(let i=num;i>0;i--){
            stand = (k>=0) ? stand.next : stand.prev; 
        }
        return (stand) ? stand.data : null;
}

/*
// @ Test
let ll = new Linkedlist()
let dll = new DoubleLinkedlist();
for(let i=0;i<10;i++){
    ll.add(Math.floor(Math.random()*10));
    dll.add(Math.floor(Math.random()*10));
}
ll.print();
console.log("\n");
dll.print();
console.log("\n", ll.search_node(9));
console.log("\n", dll.search_node(-11));
*/