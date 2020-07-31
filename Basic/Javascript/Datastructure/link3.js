// # 첫번째 원소를 제거한다.
import { Linkedlist } from './linkedlist.js';

// Method shift : remove first element
// param {obj => Linkedlist}
const shift = function(obj) {
    let rt = obj.head.data;
    obj._head = obj.head.next;
    return rt;
}

export { shift };
/*
// @ Test
let ll = new Linkedlist();
for(let i=0;i<5;i++){
    ll.add(i);
}
ll.print();
console.log(`\n${shift(ll)}\n`);
ll.print();
console.log(ll.head);
*/


