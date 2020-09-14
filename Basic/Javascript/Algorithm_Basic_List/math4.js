    /*
    TASK
    Fibonacci 를 계산하는 함수를 작성한다.
    [Reference] https://github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basicMath/Fibonacci.java
    [피보나치를 푸는 여러가지 방법 by Baekjoon] https://www.acmicpc.net/blog/view/28
    */
   //@Test
   const assert = require('assert').strict;
   assert.strictEqual(calcFiboByFor(5), 5);
   assert.strictEqual(calcFiboByFor(6), 8);
   assert.strictEqual(calcFiboByFor(7), 13)
   assert.strictEqual(calcFiboByRec(5), 5);
   assert.strictEqual(calcFiboByRec(6), 8);
   assert.strictEqual(calcFiboByRec(7), 13)
   assert.strictEqual(fiboByDp(5), 5);
   assert.strictEqual(fiboByDp(6), 8);
   assert.strictEqual(fiboByDp(7), 13);
   
   //#1 Iteration Ver
   function calcFiboByFor(n){
       let cur,pre=1,prepre=0;
       if(n<0) return -1;
       if(n<2) return n;
       for(let i=2;i<=n;i++){
           cur = pre + prepre;
           prepre = pre;
           pre = cur;
       }
       return cur;
   }

   //#2 Recursion Ver
   function calcFiboByRec(n){
       if(n<0) return -1;
       if(n<2) return n;
       else return calcFiboByRec(n-1) + calcFiboByRec(n-2);
   }

    //#3 DP Ver(memoization + recursion)
    // D(n) = D(n-1) + D(n-2), D(0) = 1, D(1) = 1; 
    //메모제이션(Memoization) : 재귀 함수(주로 DP 점화식) 이미 계산한 내용을 반복하는 것을 막기 위해 연산 내용을 메모리에 따로 저장 해주고 재사용
   function fiboByDp(n){
       let memo = [0, 1];
       if(n < 0) return -1;
       if(memo[n]!==undefined) return memo[n];
       return memo[n] = fiboByDp(n-1) + fiboByDp(n-2);
   }
