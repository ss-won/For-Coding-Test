// # Mergesort를 구현한다.
// 패스트캠퍼스 강의를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.

function merge(left, right) {
    let li = 0, ri = 0;
    let sorted_array = []

    while(li < left.length && ri < right.length){
        if(left[li] < right[ri]){
            sorted_array.push(left[li]);
            li++;
        }
        else{
            sorted_array.push(right[ri]);
            ri++;
        }
    }

    while(li < left.length && ri >= right.length){
        sorted_array.push(left[li]);
        li++;
    }

    while(li >= left.length && ri < right.length){
        sorted_array.push(right[ri]);
        ri++;
    }

    return sorted_array;
}

function merge_sort(arr){
    // # split elements in arr
    if (arr.length === 1) return arr;

    const mid = parseInt(arr.length / 2);
    const left = merge_sort(arr.filter((v,i)=>i<mid))
    const right = merge_sort(arr.filter((v,i)=>i>=mid))
    return merge(left, right);
}

/*
// @ Test
let li = [];
for(i = 0; i < 10; i++){
    li.push(Math.floor(Math.random()*100))
}
console.log(merge_sort(li));
*/