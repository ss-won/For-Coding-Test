/*
        TASK
        주어진 문자열이 애너그램인지를 판단한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basic/IsAnagram.java
*/

// 방법 1. O(nlogn) : 정렬 후에 비교하기->단, merge-sort를 사용했다는 가정하에
// javascript는 보통 merge sort + Insertion sort가 결합된 Timesort 기법을 쓰기 때문에 Time Complexity가 불문명하다.
const _ckAnagram1 = (s1,s2) => {
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    if(arr1.length!=arr2.length) return false;
    arr1.sort();//기본적으로 abc 사전순으로 정렬해준다.
    arr2.sort();
    for(let i in arr1){
        if(arr1[i]!=arr2[i]) return false;
    }
    return true;
} 

// 방법 2. O(n) : 문자열 개수를 세서 비교하기
const _ckAnagram2 = (s1,s2) => {
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let _freq = new Map();//HashMap은 정렬할 필요가 없음
    if(arr1.length != arr2.length) return false;

    for(let n of arr1){
        if(_freq.has(n)){
            _freq.set(n,_freq.get(n)+1);
        }
        else{
            _freq.set(n,1);
        }
    }

    for(let n of arr2){
        if(!_freq.has(n)) return false;
        _freq.set(n, _freq.get(n) - 1);
        if (_freq.get(n) < 0) return false;
    }
    return true;
}

//@Test
console.log(_ckAnagram1("caaabbb", "abababc"), _ckAnagram2("caaabbb", "abababc"));//true
console.log(_ckAnagram1("caabbbb", "abababc"), _ckAnagram2("caabbbb", "abababc"));//false