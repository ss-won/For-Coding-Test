// # Array를 기반으로 한 Hash Table 구현하기
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.
import MD5 from './node_modules/crypto-js/md5.js';
import sha1 from './node_modules/crypto-js/sha1.js';
import sha256 from './node_modules/crypto-js/sha256.js'
import encHex from './node_modules/crypto-js/enc-hex.js'

// Make Constructor Function(Object)(for OOP) - 현재 자바스크립트에서 Class를 지원하고 있으나 방식이 함수를 생성하는 것과 동일하므로, 생성자 함수를 만드는 것으로 대신한다.
// This is not a regular hash table(no solution for hash collision is guaranteed)
// Hash Function : key % 16
const HashTable = function() {
    'use strict';
    this.table = Array(16).fill(null);

    this.getKey = (idx) => {
        const idx_b = escape(idx);
        const key = sha256(idx_b);
        return parseInt(encHex.stringify(key),10)
    }

    this.hash_function = (key) => {
        return key % 16;
    }

    this.set = (idx, data) => {
        let key = this.getKey(idx);
        key = this.hash_function(key);
        if(this.table[key]!==null){
            console.log("Occur Collision");
            return false;
        }
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

export default HashTable;

/*
===============Test==================
let ht = new HashTable();
console.log(ht.getKey("wishj")%16)
console.log(ht.getKey("woodz_dnwm")%16)
ht.set("wish", "201533860");
ht.set("woodz", "19960815");
ht.desc();
console.log(ht.get("wish"));//201533860
*/

/*
========================SHA 사용 예시================================
(1) 변환하려는 string값을 컴퓨터가 인지할 수 있는 형태로 encoding 해준다. 
* escape(): 아스키문자를 유니코드 형식으로 반환 / 보통 url에서 사용하는 특정문자들을 제외하고 변환
(2) sha256(64자), sha1(40자), md5(32자) 등 해시함수를 이용해 일정한 길이의 해시값을 얻는다.
++ 원하는 형태가 10진수일때
- 해시값을 원하는 형태로 인코딩한다. 밑의 예시는 16진수로 인코딩한것임(encHex)
- 10진수 형태로 parsing 해준다.
*/
//let ex = encHex.stringify(sha1(escape("wishj")))
//let ex2 = encHex.stringify(sha256(escape("wish")))
//let ex2 = encHex.stringify(MD5(escape("wish")))
//console.log(parseInt(ex, 10), parseInt(ex2, 10))