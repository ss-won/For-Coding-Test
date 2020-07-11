# [분류] SQL 고득점 Kit - 코드 및 문제풀이

## SUM, MAX, MIN
- __(LEVEL1)__ [최댓값 구하기](https://programmers.co.kr/learn/courses/30/lessons/59415)
```sql
SELECT MAX(DATETIME) FROM ANIMAL_INS;
```
<hr>

- __(LEVEL2)__ [최솟값 구하기](https://programmers.co.kr/learn/courses/30/lessons/59038)
```sql 
SELECT MIN(DATETIME) FROM ANIMAL_INS;
```
<hr>

- __(LEVEL2)__ [동물 수 구하기](https://programmers.co.kr/learn/courses/30/lessons/59406)
```sql
SELECT COUNT(*) AS COUNT FROM ANIMAL_INS;
```
<hr>

- __(LEVEL2)__ [중복 제거하기](https://programmers.co.kr/learn/courses/30/lessons/59408)
```sql
SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS;
```
<hr>

[목록으로 돌아가기](https://github.com/ss-won/For-Coding-Test/blob/master/Programmers/sqlKit)


