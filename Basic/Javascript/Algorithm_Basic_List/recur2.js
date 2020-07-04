    /*
        TASK
        n비트의 모든 경우의 수를 출력한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/recursion/NBitWays.java
     */
    let nBits = [[""],["0","1"]];
    //@Test
    const assert = require('assert').strict;
    assert.deepStrictEqual(solution(2).sort(),["00","01","10","11"]);
    assert.deepStrictEqual(solution(3).sort(),["000","001","010","011","100","101","110","111"]);
    assert.deepStrictEqual(solution2(2).sort(), ["00", "01", "10", "11"]);
    assert.deepStrictEqual(solution2(3).sort(), ["000", "001", "010", "011", "100", "101", "110", "111"]);

    //Top-down (+ Memoizaiton)
    function solution(n){
        if(n<=0) return null;
        if(nBits[n]){
            return nBits[n];
        }
        let tmp = [];
        solution(n-1).forEach((v)=>{
            tmp.push(v+"0");
            tmp.push(v+"1");
        })
        return nBits[n] = tmp;
    }

    //Top-down
    function solution2(n){
        let res = [];  
        return bitcombination(n,"",res);
    }

    function bitcombination(n,str,res){
        if(n===str.length){
            res.push(str);
            return res;
        }
        bitcombination(n,str+"0",res);
        bitcombination(n,str+"1",res);
        return res;
    }

    //console.log(solution2(2).sort());
