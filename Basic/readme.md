# Basic Exercising
- 본 코드는 <https://github.com/JaeYeopHan/algorithm_basic_java>에서 Java로 작성된 코드들에 기반하여 Javscript, C++(예정)로 작성되었음을 알려드립니다.  
- 코딩테스트에 대비에 필요한 필수 기본문항과 풀이방법을 담고 있습니다. 실제 필자가 경험한 코딩테스트나, 타 IDE에서 풀었던 문제의 바탕이 되는 부분은 <특이사항>으로 정리하였습니다. 

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
    * <특이사항> 우아한형제들 테크캠프 FE 1차 코딩테스트(2020) 출제 : 주어진 문자열 배열에서 애너그램 요소끼리 묶어서 출력
* 주어진 문자열을 길이와 함께 적어주면서 압축을 한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/string5.js)
    * Javascript의 Map과 Map.prototype.forEach(callbackfun(value,key,thisMap)) 메소드 활용하면 간결하게 구현할 수 있다.
    * <특이사항> 카카오 겨울인턴십 코딩테스트(2020) 출제 : 주어진 문자열 배열들을 압축할때, 가장 최소의 크기로 압축되는 경우의 길이를 출력
* 주어진 문서(단어별로 나뉘어진 배열)에서 특정 단어의 빈도를 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/string6.js)
    * HashMap을 사용하여 빈도수를 저장한다.
    * 만약, 대소문자 구별을 하지 않는다는 조건이 있다면 주어진 문자열들과 주어진 단어 모두 같은 Case로 변환한다. => (ex) Javascirpt : String.prototype.toLowerCase(), String.prototype.toUpperCase()
    
    ## LICENSE
    본 게시물을 아래의 LISENCE에 의거하여 작성되었으며, 저작권은 [이곳](https://github.com/JaeYeopHan/algorithm_basic_java)에 있습니다.
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="크리에이티브커먼즈 라이선스" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
    
