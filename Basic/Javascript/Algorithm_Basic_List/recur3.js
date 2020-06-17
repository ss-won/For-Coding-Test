    /*
        TASK
        순열을 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/recursion/Permutation.java
     */
    const assert = require("assert").strict;
    assert.deepStrictEqual(solution1("123"),["123","132","213","231","312","321"]);
    assert.deepStrictEqual(solution2("123"), ["123", "132", "213", "231", "312", "321"]);
    
    //재귀 + 문자열 내장함수
    //중복된 숫자가 주어지면, 오차가 생김
    function solution1(str){
        'use strict';
        let permuts = [
            [""]
        ];
        let n = str.length;
        if(!n) return null;  
        permuts.push(str.toString().split(""));
        return new Permutation(n, permuts);
    }

    function Permutation(n, permuts){
        'use strict';
        let tmp = [];
        if (permuts[n]) return permuts[n];
        new Permutation(n - 1,permuts).forEach((v) => {
            for(let i of permuts[1]) {
                if(!v.split("").includes(i))
                    tmp.push(v+i);
            }
        });
        return permuts[n] = tmp; 
    }

    //기본 재귀 + 방문배열(boolean)
    //중복된 숫자가 있더라도 방문여부 배열을 사용하므로 보다 정확함
    function solution2(str){
        'use strict';
        let visited = Array(str.length).fill(false);
        let res = [];
        if (!str) return null;
        return Permutation2(str,visited,"",res);
    }

    function Permutation2(str,visited,tmp,res){
        'use strict';
        if(str.length===tmp.length){
            res.push(tmp);
            return res;
        }
        for(let i=0;i<str.length;i++){
            if(visited[i]) continue;
            visited[i] = true;
            Permutation2(str,visited,tmp+str[i],res);
            visited[i] = false;
        }
        return res;
    }

    //console.log(solution1("123"));
    //console.log(solution2("123"));