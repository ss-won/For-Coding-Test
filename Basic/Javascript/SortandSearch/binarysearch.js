// # binary search를 사용하여 O(log n)의 시간복잡도로 target을 찾는다.
// 단, 주어지는 arr는 오름차순으로 정렬이 된 상태이다.
// 패스트캠퍼스 강의(나동빈 강사님)를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

function binary_search(arr, target){
    if(arr.length < 1) return false
    if(arr.length === 1)
        return (arr[0] === target) ? true : false 
    
    mid = parseInt(arr.length / 2);
    if(arr[mid] === target){
        return true
    }
    return (arr[mid] > target)
    ?  binary_search(arr.filter((v,i)=>i<mid), target)
    : binary_search(arr.filter((v,i)=>i>mid), target);
}

/*
// @ Test
let arr = []
for(let i = 0; i < 50; i++){
    arr.push(Math.floor(Math.random()*100));
}
arr.sort((a,b)=> a-b);
console.log(arr)
console.log(binary_search(arr, 15));
*/