// # 중복된 원소를 제거한다.
import { Linkedlist } from './linkedlist.js';

const remove = function (obj, node) {
    let cur = obj.head;
    while (cur.next !== node) {
        cur = cur.next;
    }
    cur._next = cur.next.next;
    //cur._next._next = null;
}

const deduplicate = function (obj) {
    let cur = obj.head;
    let map = new Map();
    while(cur){
        // 중복된 데이터를 찾을 때마다 해당 노드 삭제
        // Whenever an overlap value is found, the node is deleted.
        if(map.has(cur.data)){
            remove(obj, cur);
        }
        else{
            map.set(cur.data, 1);
        }
        cur = cur.next;
    }
}

/*
// @ Test
let ll = new Linkedlist();
for(var i=1;i<6;i++){
    ll.add(i);
}
for(i;i>2;i--){
    ll.add(i);
}
ll.print();//1,2,3,4,5,6,5,4,3
deduplicate(ll);
ll.print();//1,2,3,4,5,6
*/