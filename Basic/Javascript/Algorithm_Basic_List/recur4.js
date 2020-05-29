    /*
        TASK
        N개 괄호로 만들 수 있는 모든 조합 출력하기.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/recursion/BraceCombination.java
     */
    //메모제이션의 경우 전역으로 선언해면 재사용성이 좋다.
    //@Golbal Variable
    let res = [[""]];

    //@Test
    //Node의 assert중 equal은 기본적으로 !=, ==을 사용하기 때문에 강제변환이 발생한다.
    //'==='이나 '!=='테스트 하는 것이 편리하다.
    //그 밖에는 레퍼런스로 복사에 의한 객체의 차이를 없애고 비교하는 case에서는 유용하다. 
    const assert = require('assert').strict;
    assert.deepStrictEqual(calBracket(0), null);
    assert.deepStrictEqual(calBracket(1), ["()"]);
    assert.deepStrictEqual(calBracket(2), ["(())","()()"]);
    assert.deepStrictEqual(calBracket(3), ["((()))", "(()())", "()(())", "(())()", "()()()"]);
    assert.deepStrictEqual(calBracket(0), null);
    console.log(calBracket2(1).every((v) => ["()"].includes(v))); //true
    console.log(calBracket2(2).every((v) => ["(())", "()()"].includes(v))); //true
    console.log(calBracket2(3).every((v) => ["((()))", "(()())", "()(())", "(())()", "()()()"].includes(v)));//true
    
    //#1 이전 값들을 이용한 방법
    /*
        D(n) = case(1) + case(2)의 중복을 제거한 배열
        case (1) D(n-1) 값 앞에 "(", 뒤에 ")" 붙인 조합  
        case (2) D(n-1)에 "()"앞에 붙인것, 뒤에붙인 조합
    */
    function calBracket(n){
        if(n<=0) return null;
        return mkBracket(n, res);
    }

    function mkBracket(n, res){
        let tmp = [];
        if(res[n]!==undefined) return res[n];
        mkBracket(n - 1, res).forEach((v) => tmp.push("(" + v + ")"));
        mkBracket(n - 1, res).forEach((v) => tmp = [...new Set([...tmp, "()" + v, v + "()"])]);
        return res[n] = tmp;
    }
    //#2 주어진 괄호의 개수("(",")")로 계속 탐색하여 가능한 case만 추가하는 방법
    // 재귀탐색으로 종종 많이 주어지는 문제로 대표적으로 카카오의 괄호변환 문제가 있다.
    /*  
        [재귀 탐색 Case] -> 기본 탐색 논리
        (1) "("를 추가한다. 
        (2) ")"를 추가한다.

        [유효 괄호가 아닌 Case] -> 제약조건
        (1) ")"의 괄호의 개수가 "("보다 더 많을 때 
        (2) 주어진 괄호의 개수보다 많이 사용했을때

        [탐색이 끝난 유효 괄호 Case] -> 탐색 종료 제한조건
        (1) "("괄호의 개수와 ")" 개수가 동시에 모두 0일때 -> 주어진 괄호를 모두 소진했다는 의미
    */
    function calBracket2(n){
        if(n<=0) return null;
        return bkCombination(n,n,"",[]);
    }

    function bkCombination(start, end, pair, res){
        if(start > end) return res;//제약조건1
        if(start < 0 || end < 0) return res;//제약조건2
        if(start===0 && end===0){// 탐색종료 제약조건
            res.push(pair);
            return res;
        }
        bkCombination(start-1, end, pair + "(", res);//괄호 열기
        bkCombination(start, end-1, pair + ")", res);//괄호 닫기
        return res;
    }
