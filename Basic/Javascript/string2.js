/*
        TASK
        주어진 문자열을 역순으로 출력한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basic/StringReverse.java
*/
    
    //(1) [함수 직접 구현한.ver]
    const solution2 = (s) =>{
        let arr = mkArr(s);
        let narr = [];
        for(let i=arr.length-1;i>=0;i--){
            narr.push(arr[i]);
        }
        return mkStr(narr);
    }

    const mkArr = (s) => {
        let arr = [];
        for (let i = 0; i < s.length; i++) {
            arr.push(s[i]);
        }
        return arr;
    }

    const mkStr = (arr) => {
        let str = '';
        for(let i of arr){
            str += i;
        }
        return str;
    }

    //(2) [String, Array prototype 함수 이용한 간결.ver]
    const solution1 = (s) => {
        return s.split("").reverse().join("");
    }

    //@Test
    console.log(solution1('for-coding-test'),solution2('for-coding-test'));

    