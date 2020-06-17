    /*
        TASK
        주어지는 수 이하의 소수 개수를 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basicMath/FindPrimeNumTest.java
     */

     const assert = require('assert').strict;
     assert.strictEqual(solution(-3),-1);
     assert.strictEqual(solution(0), 0);
     assert.strictEqual(solution(1), 0);
     assert.strictEqual(solution(2), 1);
     assert.strictEqual(solution(3), 2);
     assert.strictEqual(solution(8), 4);
     assert.strictEqual(solution(12), 5);
     assert.strictEqual(solution(44), 14);

     //소수는 일반적으로 1보다 큰 양의 정수 중 약수가 자기자신과 1밖에 없는 수를 말한다.
     // 따라서, 음수는 아예 취급하지 않기로 한다. -> -1 출력
     // 0,1의 경우는 양의정수인데 취급 범위가 아니므로 그냥 0을 출력한다.
     // 위의 조건들은 문제에서 제시하는 제약조건에 따르면 될 것 같다. 일반적으로는 1보다 큰 양의 정수가 범위다.
     
     //#방법2+3 이용
     function solution(n){
        let res = 0;
        let nodecimal = [];
        if(n<0) return -1;
        if(n<=1) return 0;
        for(let i=2;i<=n;i++){
            if(nodecimal.includes(i)) continue;
            if(isDecimal(i)){
                for(let j=i;j<=n;j+=i){
                    nodecimal.push(j);
                }
                res++;
            }
        }
        return res;
     }

     //방법3 참고
     function isDecimal(n){
         for(let i=2;i<=Math.sqrt(n);i++){
             if(n%i===0) return false;
         }
         return true;
     }

     /*
     1. 에라토스테네스의 체를 이용한다.
    
     2. (1)찾고자 하는 범위의 자연수를 나열한다.
        (2)2부터 시작하여, 2 의 배수를 지워나간다.
        (3)다음 소수의 배수를 모두 지운다.

     3. (1) 2와 5를 제외하면, 모든 소수의 일의 자리 수는 1, 3, 7, 9이다.
        (2) 어떤 자연수 n이 소수임을 판정하기 위해선 sqrt(n)까지의 수 중 1을 제외하고 그 자연수의 약수가 있는 지 확인하면 된다.
        (3) 배수의 성질을 이용하면 쉽게 구할 수도 있다.
        [Reference] https: //ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98_(%EC%88%98%EB%A1%A0)
     */