# Basic Exercising
 본 코드는 <https://github.com/JaeYeopHan/algorithm_basic_java>에서 Java로 작성된 코드들에 기반하여 Javscript, C++(예정)로 작성되었음을 알려드립니다. <br>코딩테스트에 대비에 필요한 필수 기본문항과 풀이방법을 담고 있습니다. 실제 필자가 경험한 코딩테스트나, 타 IDE에서 풀었던 문제의 바탕이 되는 부분은 __<특이사항>__ 으로 정리하였습니다. <br>작성된 코드는 모두 `For-Coding-Test/Basic/Javascript/*`디렉토리에 저장되어 있습니다.
</br>

## Algorithm basic list
### String basic part
* 주어진 문자열을 int 형으로 변환한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string1.js)
    * 숫자 + 문자열 = 문자열로 강제변환
    * 문자열 * 숫자 = 숫자로 강제변환
    * 기타 `parseInt()`, `eval()` 함수등을 활용할 수 있음
* 주어진 문자열을 역순으로 출력한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string2.js)
    * `string.split("").reverse().join("")` : string은 constant(불변값 단,참조 레퍼런스가 바뀔때까지)값이므로 반드시 배열로 바꿔서 처리해준 후 join("")연산자로 다시 string 형태로 만들어준다.
* 주어진 문자열에서 문자열을 구성하고 있는 각각의 문자열들이 고유한지를 판단한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string3.js)
    * HashSet을 이용하면 중복을 제거할 수 있다. => `new Set(Array), [...new Set(Array)]`
* 주어진 문자열이 애너그램인지를 판단한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string4.js)
    * 애너그램은 단어의 요소의 위치를 바꿔서 다른 단어를 만들어내는 것으로 단어안의 요소와 글자의 길이를 비교하면 된다.
    * HashMap을 사용해 글자의 개수를 비교하면 평균적인 시간복잡도를 줄일 수 있다.(O(nlogn)->O(n))
* 주어진 문자열을 길이와 함께 적어주면서 압축을 한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string5.js)
    * Javascript의 `Map`과 `Map.prototype.forEach(callbackfun(value,key,thisMap))` 메소드를 활용하면 간결하게 구현할 수 있다.
    * __<특이사항>__ 카카오 겨울인턴십 코딩테스트(2020) [[문제]](https://programmers.co.kr/learn/courses/30/lessons/60057) [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/KaKao/%5BLevle2%5D%EB%AC%B8%EC%9E%90%EC%97%B4%20%EC%95%95%EC%B6%95.js)
* 주어진 문서(단어별로 나뉘어진 배열)에서 특정 단어의 빈도를 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string6.js)
    * HashMap을 사용하여 빈도수를 저장한다.
    * 만약, 대소문자 구별을 하지 않는다는 조건이 있다면 주어진 문자열들과 주어진 단어 모두 같은 Case로 변환한다. => `(ex) Javascirpt : String.prototype.toLowerCase(), String.prototype.toUpperCase()`
### Basic Math
* 주어진 두 수의 최대 공약수와 최소 공배수를 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math1.js)
    * `유클리드 호제법`에 의한 최대 공약수 공식 : `gcb(a,b) = gcb(b,a%b)`
* n개의 서로 다른 원소 중 r개의 원소를 순서없이 선택하는 방법의 수를 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math2.js)
    * 순서를 생각해서 뽑는 것 => 순열, 순서를 생각하지 않고 조합만 뽑는 것 => 조합
    * Combination 공식을 활용한다. => `C(n,r) = C(n-1,r-1) + C(n-1,r)`
* 주어진 수보다 작은 소수의 개수를 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math3.js)
    * 어떤 자연수 `n`이 소수임을 판정하기 위해선 `sqrt(n)`까지의 수 중 1을 제외하고 그 자연수의 약수가 있는 지 확인하면 된다.
* Fibonacci 를 계산하는 함수를 작성한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math4.js)
    * DP 재귀식을 구현할때는 반드시 `Memoization`과 함께 구현한다.
    * [피보나치를 푸는 여러가지 방법 by Baekjun](https://www.acmicpc.net/blog/view/28)
* 주어진 정수의 각 자리 수의 합을 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math5.js)
    * `base % 10 = 1의 자리수`를 구할 수 있다는 점을 이용한다.
* 사다리를 한 칸 또는 두 칸씩 오를 수 있다고 했을 때 사다리 높이에 따른 사다리 오르기 방법의 경우의 수를 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math6.js)
    * `완전탐색`에서 점화식을 세울 수 있는 경우 -> `DP`
    * `완전탐색`에서 경우의 수가 적을 경우 -> `Brute Force(브루스포스)`
### Recursion Part
* 주사위로 이동 가능한 경우의 수를 모두 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur1.js)
* n비트의 모든 경우의 수를 출력한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur2.js)
* 순열을 구한다.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur3.js)
    * __<특이사항>__ 완전탐색 문제 베이스로 자주 출제되는 편
    * 유사응용문제: [백준10974](https://www.acmicpc.net/problem/10974), [백준6603](https://www.acmicpc.net/problem/6603)
* N개 괄호로 만들 수 있는 모든 조합 출력하기.
    [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur4.js)
    * __<특이사항>__ 카카오 겨울인턴십 코딩테스트(2020) [[문제]](https://programmers.co.kr/learn/courses/30/lessons/60058) [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/KaKao/%5BLevel2%5D%EA%B4%84%ED%98%B8%20%EB%B3%80%ED%99%98.js)
<hr>

## DataStructure
### Linked List
- Array 를 기반으로한 Linked List 구현
- ArrayList 를 기반으로한 Linked List 구현
- 첫번째 원소를 제거한다.
- 중복된 원소를 제거한다.
- 역순으로 출력한다.
- k번째 원소를 찾는다.
- 회문인지 판단한다.

### Stack
- Stack 을 사용하여 미로찾기 구현하기
- Stack 두 개로 Queue 자료구조 구현하기
- Stack 으로 괄호 유효성 체크 코드 구현하기
- Array를 사용하여 Stack을 구현한다. 
- ArrayList를 사용하여 Stack을 구현한다.
- Stack에 저장된 값들 중 최소값을 반환하는 minStack() 함수를 구현한다.
- Stack 자료구조를 사용하여 회문을 판별한다.
- 괄호의 유효성을 체크한다.

### Queue
- Queue 를 사용하여 Heap 자료구조 구현하기 
- Stack을 사용하여 queue를 stack처럼 만든다.
- Stack 두 개로 Queue를 구현한다.

### BinaryTree
- Binary Search Tree 구현하기
- 바이너리 트리에서 최대값을 구한다.
- 주어진 바이너리 트리가 균형 잡힌 트리인지 판별한다.
- 오름차순으로 정렬된 배열을 Binary Search Tree로 변환한다.
- 주어진 트리가 BST인지 확인한다.

### Priority Queue
- Priority queue를 사용하여 heap sort를 하라.
- 많은 수 중 top 10을 구한다.

### Binary Heap
Heapify 구현하기
<hr>

## Sort and Search
- bubble sort를 구현한다. 
- Insertion sort를 구현한다. 
- Selection sort를 구현한다. 
- Quick sort를 구현한다.
- radix sort를 구현한다.

### Search
- binary search를 사용하여 O(log n)의 시간복잡도로 target을 찾는다.
- 정렬된 2차원 배열에서 검색한다.

### bit
- 2의 제곱수인지 판별한다.
- 두 수에서 다른 비트의 개수를 구한다.
- O(1)으로 해당 데이터가 존재하는지 판단한다.
<hr>

## Famous Algorithm
- DFS
- BFS
- Karp_Rabin_Algorithm
- KMP_Algorithm

## Reference
* [브랜든의 블로그 - [알고리즘]완전탐색](https://brenden.tistory.com/10)
* 카카오 코딩테스트 문항 출저 - [프로그래머스(Programmers)](https://programmers.co.kr/learn/challenges)

## LICENSE
본 게시물을 아래의 LISENCE에 의거하여 작성되었으며, 저작권은 [이곳](https://github.com/JaeYeopHanalgorithm_basic_java)에 있습니다.  <br><br><a rel="license" href="http://creativecommons.orglicenses/by/4.0/"><img alt="크리에이티브커먼즈 라이선스" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
    
