// # selection sort 구현하기
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

// The insert sort function is to search the front part of the object until fewer elements are found.
function insertion_sort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j>=0;j--){
            if(arr[j] < arr[j-1]){
                let tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp; 
            }
            else break;
        }
    }
    return arr;
}

/*
// @ Test
let data = 0;
let data_list = [];
for(let i=0;i<10;i++){
    data = Math.floor(Math.random()*10);
    data_list.push(data);
}
console.log(data_list);
console.log(insertion_sort(data_list));
*/

// @ Memo
//삽입정렬은 두번째 인자부터 시작하여, 해당 인자보다 더 작은 값이 나올때까지 탐색한다.
//해당 인자보다 더 크면 그 인자를 뒤로 보내고, 더 작으면 그 인자 뒤에 인자값을 삽입하고 다음 턴으로 이동한다.
//더 큰 값에 적용되는 shift 연산은 swap으로 대신한다.  
//시간 복잡도는 O(n^2)이며 최선의 경우는 O(n)이다.