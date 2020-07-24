// # Array를 기반으로 한 Hash Table 구현하기
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

import HashTable from './hashtable.js';

//inherited from hashtable.js
//This prevents hash collision by using  one of close hashing technique named Linear Probling
function HtLinearProbling() {
    HashTable.call(this);
    this.set = (idx, data) => {
        const key = this.hash_function(this.getKey(idx));
        const slot = [idx, data];
        // 빈공간일 때
        if (this.table[key] === null) {
            this.table[key] = slot;
            return undefined;
        }
        // 충돌이 발생할 때
        // 기존에 저장되어 있는 값일 때 -> 해당 값을 수정한다.
        for(let i=key;i<this.table.length;i++){
            if(this.table[i]===null){
                // 기존에 저장되어 있는 값이 아닐때 -> 해당 공간 뒤에 추가한다.
                this.table[i] = slot;
            }
            if(this.table[i][0] === idx){
                this.table[i][1] = data;
                return;
            }
        }
        return undefined;
    }
    this.get = (idx) => {
        const key = this.hash_function(this.getKey(idx));
        if (this.table[key] === null) {
            console.log("This data is not saved");
            return this.table[key];
        }
        // 충돌이 발생할 때
        // 기존에 저장되어 있는 값일 때 -> 해당 값을 수정한다.
        for (let i = key; i < this.table.length; i++) {
            if(this.table[i]===null) 
                return false;
            else if (this.table[i][0] === idx) 
                return this.table[i][1];
        }
        return false;
    }
}
HtLinearProbling.prototype = new HashTable();

/*
============test================
let ht = new HtLinearProbling();
ht.set("ss-won", "19960515")
ht.set("woodz", "19960805")
ht.set("ss-won", "201533860")
console.log(ht.get("ss-won"));
ht.desc();
*/