// # 링크드리스트를 활용하여 회문인지 판단한다.

import { DoubleLinkedlist } from './double_linkedlist.js';

function ckPalindrome(str){
    const store = new DoubleLinkedlist();
    for(let i in str){
        store.add(str[i]);
    }

    let stand = 0;
    let front = store.find_front(0);
    let back = store.find_back(1);
    while(stand < parseInt(str.length/2, 10)){
        if(front.data !== back.data) return false;
        front = front.next;
        back = back.prev;
        stand++;
    }
    return true;
}

/*
// @ Test
console.log(ckPalindrome("level"));//true
console.log(ckPalindrome("example"));//false
*/