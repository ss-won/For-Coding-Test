// # Stack 자료구조를 사용하여 회문을 판별한다.
import { Stack } from './s3.js';

function ckPalindrome(str){
    let stack = new Stack();
    let reverse = [];
    for(let char of str){
        stack.push(char);
    }
    while(!stack.isEmpty()){
        reverse.push(stack.pop());
    }
    return (reverse.join("") === str) ? true : false;
}

/*
// @ Test
console.log(ckPalindrome('level'));//true
console.log(ckPalindrome('levela'));//false
*/