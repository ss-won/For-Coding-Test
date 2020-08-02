// # selection sort 구현하기
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

// Finding the minimum value and sorting from the front is key point to selection sort
function selection_sort(arr){
    for(let i=0;i<arr.length-1;i++){
        let lowest = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = tmp;
    }
    return arr;
}

/*
// @ Test
let rand = 0, data = 0;
let data_list = [];

for(let i=0;i<10;i++){
    rand = Math.random();
    data = Math.floor(rand * 10);
    data_list.push(data);
}
console.log(data_list);
console.log(selection_sort(data_list));
*/

// @ Memo
// 선택정렬의 key-point는 최솟값을 찾아 앞쪽부터 정렬하는 것이다.
// 시간복잡도는 O(n^2)이다.