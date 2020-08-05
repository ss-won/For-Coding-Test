// # Quick sort를 구현한다.
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

function quick_sort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];
    let left = arr.filter((v,i) => pivot>v && i!==0);
    let right = arr.filter((v,i) => pivot<=v && i!==0);
    return [...quick_sort(left), pivot, ...quick_sort(right)];
}

let arr = []
for(let i=0;i<10;i++){
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);
console.log(quick_sort(arr));
