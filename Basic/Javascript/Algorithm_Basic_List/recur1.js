    /*
        TASK
        주사위로 이동 가능한 경우의 수를 모두 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/recursion/Dice.java
     */
    let memo = [1];
    const assert = require('assert').strict; 
    assert.strictEqual(calcDiceCase1(3), 4);
    assert.strictEqual(calcDiceCase1(4), 8);
    assert.strictEqual(calcDiceCase1(5), 16);
    assert.strictEqual(calcDiceCase1(6), 32);
    assert.strictEqual(calcDiceCase1(7), 63);
    assert.strictEqual(calcDiceCase1(8), 125);
    assert.strictEqual(calcDiceCase2(2), 2);
    assert.strictEqual(calcDiceCase2(3), 4);
    assert.strictEqual(calcDiceCase2(4), 8);
    assert.strictEqual(calcDiceCase2(5), 16);
    assert.strictEqual(calcDiceCase2(6), 32);
    assert.strictEqual(calcDiceCase2(7), 63);
    assert.strictEqual(calcDiceCase2(8), 125);

    //1-6까지의 수로 주어진 수(n)을 표기하는 방법의 수를 구하라.
    //DP => Recursion + Memoization 필수
    /*
        D(n) = (1)Sum(k=1부터 k=n-1까지 D(k)) (0<n<=6) -> 2^n-1
               (2)Sum(k=n-6부터 k=n-1까지 D(k)) (n>6)
               단, n<0인 경우는 0, D(0) = 1 이라고 지정한다.
    */
    
    
    function calcDiceCase1(n){
        if(n<0) return 0;
        if(memo[n]) return memo[n]
        else{
            if(n<=6) {
                return Math.pow(2,n-1);
            }
            return memo[n] = parseInt(calcDiceCase1(n-1)*2) - calcDiceCase1(n-7);
        }
    }

    function calcDiceCase2(n){
        let res = 0;
        if (n < 0) return 0;
        if (memo[n]) {
            return memo[n];
        } 
        else {
            for(let i=1;i<=6;i++){
                if(n-i>=0){
                    if(!memo[n-i]) memo[n-i] = calcDiceCase2(n-i);
                    res += memo[n - i];
                }
            }
            return res;
        }
    }

    
