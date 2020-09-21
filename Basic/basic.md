# Basic Exercising
 본 코드와 게시물은 <https://github.com/JaeYeopHan/algorithm_basic_java>에서 작성된 문제와 Java 코드들에 기반하여 Javscript, C++(예정)로 2차 가공되어 작성되었음을 알려드립니다. <br>코딩테스트에 대비에 필요한 필수 기본문항과 풀이방법을 담고 있습니다. <br>또한, 원작자의 게시물과는 다르게 실제 본인이 경험한 코딩테스트나 타 IDE에서 풀었던 문제의 바탕이 되는 부분은 __<특이사항>__ 으로 정리하였으며 팁도 함께 작성하였습니다. <br>현재까지 작성된 코드는 모두 `For-Coding-Test/Basic/Javascript/*` 디렉토리에 저장되어 있고 참조한 코드는 모두 코드 내에 주석으로 기입하였습니다. <br>본인은 원본에 대한 어떠한 권리도 없으므로 원본을 침해하는 일이 발생할 경우 본 게시물이 삭제되거나 수정될 수 있음을 밝힙니다.
</br>

## Algorithm basic list
### String basic part
* 주어진 문자열을 int 형으로 변환한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string1.js) 
    * 숫자 + 문자열 = 문자열로 강제변환
    * 문자열 * 숫자 = 숫자로 강제변환
    * 기타 `parseInt()`, `eval()` 함수등을 활용할 수 있음
* 주어진 문자열을 역순으로 출력한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string2.js) 
    * `string.split("").reverse().join("")` : string은 constant(불변값 단,참조 레퍼런스가 바뀔때까지)값이므로 반드시 배열로 바꿔서 처리해준 후 join("")연산자로 다시 string 형태로 만들어준다.
* 주어진 문자열에서 문자열을 구성하고 있는 각각의 문자열들이 고유한지를 판단한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string3.js) 
    * HashSet을 이용하면 중복을 제거할 수 있다. => `new Set(Array), [...new Set(Array)]`
* 주어진 문자열이 애너그램인지를 판단한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string4.js) 
    * 애너그램은 단어의 요소의 위치를 바꿔서 다른 단어를 만들어내는 것으로 단어안의 요소와 글자의 길이를 비교하면 된다.
    * HashMap을 사용해 글자의 개수를 비교하면 평균적인 시간복잡도를 줄일 수 있다.(O(nlogn)->O(n))
    * __<특이사항>__ 상반기 FE 직군 코딩테스트 출제(2020) 
* 주어진 문자열을 길이와 함께 적어주면서 압축을 한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string5.js) 
    * Javascript의 `Map`과 `Map.prototype.forEach(callbackfun(value,key,thisMap))` 메소드를 활용하면 간결하게 구현할 수 있다.
    * __<특이사항>__ 카카오 겨울인턴십 코딩테스트(2020) [[문제]](https://programmers.co.kr/learn/courses/30/lessons/60057) [[code]](https://github.com/ss-won/For-Coding-Test/blob/master/KaKao/%5BLevle2%5D%EB%AC%B8%EC%9E%90%EC%97%B4%20%EC%95%95%EC%B6%95.js)
* 주어진 문서(단어별로 나뉘어진 배열)에서 특정 단어의 빈도를 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/string6.js) 
    * HashMap을 사용하여 빈도수를 저장한다.
    * 만약, 대소문자 구별을 하지 않는다는 조건이 있다면 주어진 문자열들과 주어진 단어 모두 같은 Case로 변환한다. => `(ex) Javascirpt : String.prototype.toLowerCase(), String.prototype.toUpperCase()`
### Basic Math
* 주어진 두 수의 최대 공약수와 최소 공배수를 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math1.js) 
    * `유클리드 호제법`에 의한 최대 공약수 공식 : `gcb(a,b) = gcb(b,a%b)`
* n개의 서로 다른 원소 중 r개의 원소를 순서없이 선택하는 방법의 수를 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math2.js) 
    * 순서를 생각해서 뽑는 것 => 순열, 순서를 생각하지 않고 조합만 뽑는 것 => 조합
    * Combination 공식을 활용한다. => `C(n,r) = C(n-1,r-1) + C(n-1,r)`
* 주어진 수보다 작은 소수의 개수를 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math3.js) 
    * 어떤 자연수 `n`이 소수임을 판정하기 위해선 `sqrt(n)`까지의 수 중 1을 제외하고 그 자연수의 약수가 있는 지 확인하면 된다.
* Fibonacci 를 계산하는 함수를 작성한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math4.js) 
    * DP 재귀식을 구현할때는 반드시 `Memoization`과 함께 구현한다.
    * [피보나치를 푸는 여러가지 방법 by Baekjoon](https://www.acmicpc.net/blog/view/28)
* 주어진 정수의 각 자리 수의 합을 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math5.js) 
    * `base % 10 = 1의 자리수`를 구할 수 있다는 점을 이용한다.
* 사다리를 한 칸 또는 두 칸씩 오를 수 있다고 했을 때 사다리 높이에 따른 사다리 오르기 방법의 경우의 수를 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/math6.js) 
    * `완전탐색`에서 점화식을 세울 수 있는 경우 -> `DP`
    * `완전탐색`에서 경우의 수가 적을 경우 -> `Brute Force(브루스포스)`
### Recursion Part
* 주사위로 이동 가능한 경우의 수를 모두 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur1.js) 
* n비트의 모든 경우의 수를 출력한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur2.js) 
* 순열을 구한다.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur3.js) 
    * __<특이사항>__ 완전탐색 문제 베이스로 자주 출제되는 편
    * 유사응용문제: [백준10974](https://www.acmicpc.net/problem/10974), [백준6603](https://www.acmicpc.net/problem/6603)
* N개 괄호로 만들 수 있는 모든 조합 출력하기.
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Algorithm_Basic_List/recur4.js) 
    * __<특이사항>__ 카카오 겨울인턴십 코딩테스트(2020) 
    [[문제]](https://programmers.co.kr/learn/courses/30/lessons/60058) 
    [[js]](https://github.com/ss-won/For-Coding-Test/blob/master/KaKao/%5BLevel2%5D%EA%B4%84%ED%98%B8%20%EB%B3%80%ED%99%98.js) 
<hr>

## DataStructure
### Linked List
- Array 를 기반으로한 Linked List 구현
    - Class 기반으로 구현한 __Linkedlist__ : [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/linkedlist.js)
    - Class 기반으로 구현한 __Double-linkedlist__ : [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/double_linkedlist.js)
- 첫번째 원소를 제거한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/link3.js) (__Linkedlist__)
- 중복된 원소를 제거한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/link4.js) (__Linkedlist__)
- 역순으로 출력한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/link5.js) (__DoubleLinkedlist__)
- k번째 원소를 찾는다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/link6.js) (__Linkedlist__, __DoubleLinkedlist__)
- 회문인지 판단한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/link7.js) (__DoubleLinkedlist__)

### Hash Table
- Hash Table 구현하기 [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/hashtable.js)
- Hash Table을 Chaining 기법으로 구현하여 충돌 해결하기 [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/ht_chaining.js)
- Hash Table을 Linear Probling 기법으로 구현하여 충돌 해결하기 [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/ht_linear_probling.js)

### Stack
- Stack 을 사용하여 미로찾기 구현하기
- Stack 으로 괄호 유효성 체크 코드 구현하기
- Array를 사용하여 Stack을 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/s3.js)
- Stack에 저장된 값들 중 최소값을 반환하는 minStack() 함수를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/s4.js)
- Stack 자료구조를 사용하여 회문을 판별한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/s5.js)

### Queue
- Array를 사용하여 Queue를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/q1.js)
- Queue 를 사용하여 Heap 자료구조 구현하기 
- Stack을 사용하여 queue를 stack처럼 만든다.
- Stack 두 개로 Queue를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/q4.js)

### BinaryTree
- Binary Search Tree 구현하기 [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/bst.js)
- 바이너리 트리에서 최대값을 구한다.
- 주어진 바이너리 트리가 균형 잡힌 트리인지 판별한다.
- 오름차순으로 정렬된 배열을 Binary Search Tree로 변환한다.
- 주어진 트리가 BST인지 확인한다.

### Priority Queue
- Priority queue 구현하기. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/priorityqueue.js)
- Priority queue를 사용하여 heap sort를 하라. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/heapsort.js)
- 많은 수 중 top 10을 구한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/pq3.js)

### Binary Heap
- Binary Heap 구현하기 [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/heap.js)
- Heapify 구현하기 [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Datastructure/heapify.js)
<hr>

## Sort and Search
- bubble sort를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/SortandSearch/bubblesort.js) 
- Insertion sort를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/SortandSearch/insertionsort.js)
- Selection sort를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/SortandSearch/selectionsort.js)
- Quick sort를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/SortandSearch/quicksort.js)
- Merge sort를 구현한다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/SortandSearch/mergesort.js)
- radix sort를 구현한다.

### Search
- binary search를 사용하여 O(log n)의 시간복잡도로 target을 찾는다. [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/SortandSearch/binarysearch.js)
- 정렬된 2차원 배열에서 검색한다.

### bit
- 2의 제곱수인지 판별한다.
- 두 수에서 다른 비트의 개수를 구한다.
- O(1)으로 해당 데이터가 존재하는지 판단한다.
<hr>

## Famous Algorithm
- DFS [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Famous_Algorithm/dfs.js)
- BFS [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Famous_Algorithm/bfs.js)
- Dijkstra [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Famous_Algorithm/dijkstra.js)
- Kruskal [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Famous_Algorithm/kruskal.js)
- Prim [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Famous_Algorithm/prim.js)
- Karp_Rabin_Algorithm
- KMP_Algorithm [js](https://github.com/ss-won/For-Coding-Test/blob/master/Basic/Javascript/Famous_Algorithm/kmp.js)

## Reference
* [브랜든의 블로그 - [알고리즘]완전탐색](https://brenden.tistory.com/10)
* 카카오 코딩테스트 문항 출저 - [프로그래머스(Programmers)](https://programmers.co.kr/learn/challenges)

## LICENSE
본 게시물을 아래의 LISENCE에 준수하여 작성되었으며, 저작권은 [JaeYeopHan/algorithm_basic_java](https://github.com/JaeYeopHan/algorithm_basic_java)에 있습니다.

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="크리에이티브 커먼즈 라이선스" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">크리에이티브 커먼즈 저작자표시 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.

원본을 참조한 2차적 가공물이며 변경된 사항도 마찬가지로 같은 LICENSE를 준수하고 있습니다.