# Basic Exercising
본 코드는 <https://github.com/JaeYeopHan/algorithm_basic_java>에 기반하여 작성되었습니다. Javscript, C++로 직접 작성하였습니다.

## Algorithm basic list
### String basic part
* 주어진 문자열을 int 형으로 변환한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/string1.js)
    * 숫자 + 문자열 = 문자열로 강제변환
    * 문자열 * 숫자 = 숫자로 강제변환
    * 기타 parseInt(), eval() 함수등을 활용할 수 있음
* 주어진 문자열을 역순으로 출력한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/string2.js)
    * string.split("").reverse().join("") : string은 constant(불변값 단,참조 레퍼런스가 바뀔때까지)값이므로 반드시 배열로 바꿔서 처리해준 후 join("")연산자로 다시 string 형태로 만들어준다.
* 주어진 문자열에서 문자열을 구성하고 있는 각각의 문자열들이 고유한지를 판단한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/string3.js)
    * HashSet을 이용하면 중복을 제거할 수 있다. => new Set(Array), [...new Set(Array)]
* 주어진 문자열이 애너그램인지를 판단한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/string4.js)
    * 애너그램은 단어의 요소의 위치를 바꿔서 다른 단어를 만들어내는 것으로 단어안의 요소와 글자의 길이를 비교하면 된다.
    * HashMap을 사용해 글자의 개수를 비교하면 평균적인 시간복잡도를 줄일 수 있다.(O(nlogn)->O(n))
    * <특이사항> 우아한형제들 테크캠프(FE, 1차코딩테스트, 2020) 출제 : 주어진 문자열 배열들을 애너그램 요소끼리 묶어서 출력
    
    
