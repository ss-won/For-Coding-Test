// Map 자료구조 기반으로 구현하였다.
// 보통은 알파벳 아스키코드 값으로 만듬 -> 메모리 절약
// this.map을 Array.from(Array(26),v=>0) 형태로 선언하면 됨

function Trie(){
    this.map = new Map();
    this.finish = false;

    this.insert = (str) => {
        if(str.length == 1)
            this.finish = true;
        else{
            if(!this.map.has(str[0]))
                this.map.set(str[0],new Trie());
            this.map.get(str[0]).insert(str.split("").filter(v=>str[0]!=v).join(""));
        }
    }

    this.find = (str) => {
        if(this.finish && str.length == 1) return this;
        if(!this.map.has(str[0])) return null;
        return this.map.get(str[0]).find(str.split("").filter(v=>str[0]!=v).join(""));
    }

    this.str_exist = (str) => {
        if (this.finish && str.length == 1) return true;
        if(!this.map.has(str[0])) return false;
        return this.map.get(str[0]).str_exist(str.split("").filter(v=>str[0]!=v).join(""));
    }
}

// @ Test
const root = new Trie();
root.insert("abc");
console.log(root.find("abc")); // 해당 Trie 반환
console.log(root.find("abab")); // null
console.log(root.find("abcd")); // null
console.log(root.str_exist("abc")); // true
console.log(root.str_exist("abab")); // false
console.log(root.str_exist("abcd")); // false