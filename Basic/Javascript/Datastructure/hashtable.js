// # Array를 기반으로 한 Hash Table 구현하기
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.
import MD5 from './node_modules/crypto-js/md5.js'

// Hash Function : key % 16
const HashTable = function() {
    'use strict';
    this.table = Array(16).fill(null);

    this.getKey = (idx) => {
        return parseInt(MD5(idx));
    }

    this.hash_function = (key) => {
        return key % 16;
    }

    this.set = (idx, data) => {
        let key = this.getKey(idx);
        key = this.hash_function(key);
        this.table[key] = data; 
    }

    this.get = (idx) => {
        let key = this.getKey(idx);
        key = this.hash_function(key);
        return this.table[key];
    }

    this.desc = () => {
        for(let v of this.table)
            console.log(v);
    }

}
/*=========Test===========*/
let ht = new HashTable();
ht.set("wish", "201533860");
ht.set("woodz", "19960815");
ht.desc();
console.log(ht.get("wish"));//201533860