// # Array를 기반으로 한 Hash Table 구현하기
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

import HashTable from './hashtable.js';

//inherited from hashtable.js
//This prevents hash collision by using  one of open address technique named Chaining 
function HtChaining() {
    HashTable.call(this);
    this.set = (idx,data) => {
        const key = this.hash_function(this.getKey(idx));
        const slot = [idx, data];
        // 빈공간일 때
        if (this.table[key] === null) {
            this.table[key] = [slot];
            return undefined;
        }
        // 충돌이 발생할 때
        else {
            // 기존에 저장되어 있는 값일 때 -> 해당 값을 수정한다.
            this.table[key].map(s => (s[0] === idx) ? [idx,data] : s);
            // 기존에 저장되어 있는 값이 아닐때 -> 해당 공간 뒤에 추가한다.
            this.table[key] = [...this.table[key], slot];
            return undefined;
        }
    }

    this.get = (idx) => {
        const key = this.hash_function(this.getKey(idx));
         if (this.table[key] === null) {
             console.log("This data is not saved");
             return this.table[key];
         }
         // 충돌이 발생할 때
        return this.table[key].reduce((acc,cur) => {
           if(cur[0] === idx) acc = cur[1];
           return acc;
        }, null);
    }
}

HtChaining.prototype = new HashTable();

/*
=========test============
let ht = new HtChaining();
ht.set("ss-won", "19960515")
ht.set("woodz", "19960805")
console.log(ht.get("jenol"));
//ht.desc();
//console.log(ht.getKey("woodz")%16, ht.getKey("ss-won")%16);
*/
