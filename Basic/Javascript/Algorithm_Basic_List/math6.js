    /*
        TASK
        사다리를 한 칸 또는 두 칸씩 오를 수 있다고 했을 때
        사다리 높이에 따른 사다리 오르기 방법의 경우의 수를 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basicMath/SumEachNum.java
     */
    let memo = [1,1];
    //@Test
    const assert = require('assert').strict;
    assert.strictEqual(solution(0), 1);
    assert.strictEqual(solution(1), 1);
    assert.strictEqual(solution(2), 2);
    assert.strictEqual(solution(3), 3);
    assert.strictEqual(solution(4), 5);
    assert.strictEqual(solution(5), 8);
    assert.strictEqual(solution(6), 13);
    assert.strictEqual(solution(7), 21);
    assert.strictEqual(solution2(0), 1);
    assert.strictEqual(solution2(1), 1);
    assert.strictEqual(solution2(2), 2);
    assert.strictEqual(solution2(3), 3);
    assert.strictEqual(solution2(4), 5);
    assert.strictEqual(solution2(5), 8);
    assert.strictEqual(solution2(6), 13);
    assert.strictEqual(solution2(7), 21);

    //경우의 수가 많지 않은 경우의 수 문제 -> 완전탐색
    //점화식을 세울 수 있는 경우 -> DP, 경우의 수가 매우 많을 경우 -> 기타 다른 자료구조 및 알고리즘 이용하기
    //사다리 높이 = h, h>0일 경우 무조건 다 올라가야 함

    //#1 DP Ver
    //D(0) = 1(올라갈 수 없음 => 공집합), D(1) = 1(1번 올라가는 것만 선택가능)
    //D(h) = D(h-1):한칸 올라가는 것을 택한 경우의수 + D(h-2):두칸 올라가는 것을 택한 경우
    function solution(h){
        if(h<0) return 1;
        if(memo[h]) return memo[h];
        return memo[h] = solution(h-1) + solution(h-2);
    }

    //#2 조합 Ver
    //2 가 들어갈 수 있는 개수 만큼 loop 돌린 조합의 배열순서 개수 출력
    function solution2(h){
        let sum = 0;
        let loop = parseInt(h / 2);
        if (h<=1) return 1;
        for(let i=loop;i>=0;i--){
            let tmp = mkCom(h-i,i);
            sum += tmp;
        }
        return sum;
    }

    function mkCom(n,r){
        if( !n || !r || n===r ) return 1;
        return mkCom(n-1,r-1) + mkCom(n-1,r);
    }

    
    
