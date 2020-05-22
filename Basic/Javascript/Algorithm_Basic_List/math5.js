    /*
        TASK
        주어진 정수의 각 자리 수의 합을 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basicMath/SumEachNum.java
     */
    //@Test
    const assert = require('assert').strict;
    assert.strictEqual(solution(0), 0);
    assert.strictEqual(solution(235), 10);
    assert.strictEqual(solution(235678), 31);
    assert.strictEqual(solution(-1), 1);

    //base % 10 = 1의 자리수를 구할 수 있다는 점을 이용한다.
    function solution(n){
        let base = Math.abs(n);
        let sum = 0;
        while(base > 0){
            sum += base % 10;
            //Javascirpt에서는 number형태의 강력한 제제가 없기 때문에
            //정수형만 취급하기 위해서는 parseInt()를 사용해야한다.
            base = parseInt(base / 10);
        }
        return sum;
    }

    /*
    function solution(n){
        let pre=-1, cur=0, i=0, sum=0;
        if(n==0) return 0;
        //각 자리숫자(절댓값)을 구할것이기 때문에    
        if(n<0) n = -n;
        do{
            pre = cur;
            cur = n % Math.pow(10,i+1)
            sum += parseInt(cur / Math.pow(10,i));
            i++;
        }while(pre!=cur)

        return sum;
    }
    */