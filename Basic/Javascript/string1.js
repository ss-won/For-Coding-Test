    /* 
        주어진 문자열을 정수형(Number)로 변환한다.
    */
    /*
    [Reference] https://github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basic/StringParseToInt.java
    private int toIntFromString(String str) {
        //        return Integer.parseInt(str);
        char[] strArr = str.toCharArray();
        int base = 0;
        for (char c : strArr) {
            base *= 10;
            base += c - '0';
        }
        return base;
    }
    */

    function stringToNumber(s) {
        'use strict';
         //#1 형변환 함수 이용하기
            //return parseInt(s);
            //return Number(s);
         //#2 자동 형변환 시키기
         /*
            let arr = s.split("");
            let res = 0;
            for(let v of s){
                res *= 10;
                res += v - '';
            }
            return base;
        */
        return (s *= 1);
    }

    //@test
    console.log(stringToNumber('249039')===249039);
    console.log(typeof stringToNumber('249039')===typeof 249039);
