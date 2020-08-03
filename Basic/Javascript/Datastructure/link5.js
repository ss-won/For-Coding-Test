// # 링크드리스트에서 데이터를 역순으로 출력한다.
// Double Linked list를 활용하였다.
import { DoubleLinkedlist } from './double_linkedlist.js';

function printReverse(obj){
    let curr = obj.tail;
    while(curr){
        console.log(curr.data);
        curr = curr.prev;
    }
}

// @ Test
let dll = new DoubleLinkedlist();
for(let i=0;i<10;i++){
    dll.add(Math.floor(Math.random()*100));
}
console.log("print");
dll.print();
console.log("reverse print");
printReverse(dll);