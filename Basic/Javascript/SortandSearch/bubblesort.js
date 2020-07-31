// # bubble sort 구현하기
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

const bubblesort = (arr) => {
    'use strict'
    for(let i=0;i<arr.length-1;i++){
        let swap = false;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                swap = true;
            }
        }
        if(!swap) break;
    }
    return arr;
}

/*
// @ Test
let arr = [10,9,8,7,6,5,4,3,2,1];//최악의 경우
bubblesort(arr);
console.log(arr);
*/

// @ Meno
// 배열은 가변값이므로, 같은 reference 영역에 있으면 변화가 적용된다.
// 시간복잡도는 O(n^2)