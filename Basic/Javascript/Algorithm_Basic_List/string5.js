/*
        TASK
        주어진 문자열을 길이와 함께 적어주면서 압축을 한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basic/CharacterCompressWithLength.java
*/
// Map.prototype.forEach(callbackfun(value,key,thisMap))라는 반복메소드를 가지고 있다.

//#1 HashMap을 이용한 방법
const strCompress_map = (s) => {
    let numMap = new Map();
    let arr = s.split("");
    let res = '';
    for(let i in arr){
        if(numMap.has(arr[i])){
            numMap.set(arr[i],numMap.get(arr[i])+1);
        }
        else{
            numMap.set(arr[i],1);
        }
    }
    numMap.forEach((v,k)=>res+= v+k);
    return res;
} 

//#2 변수에 이전값과 반복된 개수를 입력받는 방법
const strCompress_arr = (s) => {
    let arr = s.split("");
    let pre = arr[0];
    let count = 0;
    let res = '';
    for(let c of arr){
        if(pre==c){
            count++;
        }
        else{
            res += count + pre;
            pre = c;
            count = 1;
        }
    }
    res += count + pre;
    return res;
}

//@Test
console.log(strCompress_map("aaabbbccc"),strCompress_arr("aaabbbccc"));//3a3b3c