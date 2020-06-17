    /*
        TASK
        n개의 서로 다른 원소 중 r개의 원소를 순서없이 선택하는 방법의 수를 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basicMath/BasicCombination.java
     */
    const assert = require('assert').strict;
    assert.strictEqual(getByRecursion(0, 0), 1);//공집합
    assert.strictEqual(getByRecursion(1, 0), 1);//공집합
    assert.strictEqual(getByRecursion(2, 1), 2);
    assert.strictEqual(getByRecursion(8, 3), 56); 
    assert.strictEqual(getByDp(0, 0), 1);
    assert.strictEqual(getByDp(1, 0), 1);
    assert.strictEqual(getByDp(2, 1), 2);
    assert.strictEqual(getByDp(8, 3), 56);
    assert.strictEqual(getByDp(7 ,3),35);
    assert.strictEqual(get(0, 0), 1);
    assert.strictEqual(get(1, 0), 1);
    assert.strictEqual(get(2, 1), 2);
    assert.strictEqual(get(8, 3), 56);
    
    //nCr 조합구하기
    function get(n,r){
        let resu = 1,resd = 1;       
        if(r===0 || n===r) return 1;
        if(n-r>n/2) r = n-r;
        for(let i=1;i<=r;i++){
            resu *= n-(i-1);
            resd *= i;
        }
        return resu / resd;
    }

    //애초에 n>=r이라고 가정한다.
    //C(n,r) = C(n-1,r-1) + C(n-1,r) 공식을 이용한다.
    function getByRecursion(n,r) {
        if(r===0||n===r) return 1;
        if (n - r > n / 2) r = n - r;
        return getByRecursion(n-1,r-1) + getByRecursion(n-1,r);
    }

    //재귀 + 메모제이션
    function getByDp(n,r) {
        let memo = Array.from(Array(10), () => Array(10).fill(0));
        if (r === 0 || n === r) return 1;
        if (n - r > n / 2) r = n - r;
        if(memo[n][r]) return memo[n][r];
        return memo[n][r] = getByDp(n-1,r-1) + getByDp(n-1,r);
    }
