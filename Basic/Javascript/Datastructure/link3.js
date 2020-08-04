// # 첫번째 원소를 제거한다.
import { Linkedlist } from './linkedlist.js';

// Method shift : remove first element
// param {obj => Linkedlist}
Linkedlist.prototype.shift = function() {
    let rt = this.head.data;
    this._head = this.head.next;
    return rt;
}



// @ Test
let ll = new Linkedlist();
for(let i=0;i<5;i++){
    ll.add(i);
}
ll.print();
console.log(`\n${ll.shift()}\n`);
ll.print();
console.log(ll.head);



