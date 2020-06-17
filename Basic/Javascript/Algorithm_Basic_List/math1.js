    /*
        TASK
        입력받은 두 수의 최대 공약수, 최소 공배수를 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basicMath/GcdAndGcm.java
     */

    //@Test
    //nodejs aseert 모듈
    const assert = require("assert").strict; 
    assert.strictEqual(getgcd(-1,0),-1);
    assert.strictEqual(getgcd(0,0),0);
    assert.strictEqual(getgcd(0,6),6);
    assert.strictEqual(getgcd(6,8),2);
    assert.strictEqual(getlcm(6,8),24);

    assert.strictEqual(gcd(-1, 0), -1);
    assert.strictEqual(gcd(0, 0), 0);
    assert.strictEqual(gcd(0, 6), 6);
    assert.strictEqual(gcd(6, 8), 2);
    assert.strictEqual(gcdRecursion(-1, 0), -1);
    assert.strictEqual(gcdRecursion(0, 0), 0);
    assert.strictEqual(gcdRecursion(0, 6), 6);
    assert.strictEqual(gcdRecursion(6, 8), 2);
    assert.strictEqual(lcm(6, 8), 24);

    function getgcd(a,b){
        //음수, 0 예외처리
        if(a < 0 ||b < 0) return -1;
        if(a===0) return b;
        for(let i=Math.max(a,b);i>=1;i--){
            if(a%i===0 && b%i===0) return i;
        }
    }
    
    function getlcm(a,b){
        for(let i=1;i<Math.min(a,b);i++){
            if (Math.max(a, b) * i % Math.min(a, b) === 0) 
            return Math.max(a, b) * i
        }
    }

    //유클리드 호제법으로 풀기 gcb(a,b) = gcb(b,a%b)
    //[Refrence] https://suhak.tistory.com/275
    function gcd(a,b){
        if(a<0||b<0) return -1;
        if(b===0) return 0; //b로 나누는 경우 제외
        //나머지가 0일때까지 반복한다.
        let tmp = 0;
        while(b!==0){
            tmp = b;
            b = a%b;
            a = tmp;
        }
        return a;
    }

    function gcdRecursion(a,b){
        if(a<0||b<0) return -1;
        //재귀실행에서 b==0이란건 a%b==0이란 말과 같음
        if(b===0) return a;
        else return gcdRecursion(b,a%b);
    }
    
    function lcm(a,b){
       let d = gcd(a,b);
       // a = m*d , b = n*d (m,n은 서로소 -> d가 최대공약수이니까)
       // lcm(a,b) = m*n*d = (a/d)*(b/d)*d = a*b/d
       return a*b/d;
    }
