# [분류] SQL 고득점 Kit - 코드 및 문제풀이

## GROUP BY
- __(LEVEL2)__ [고양이와 개는 몇마리가 있을까](https://programmers.co.kr/learn/courses/30/lessons/59040)
```sql
SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) FROM ANIMAL_INS
WHERE ANIMAL_TYPE='Dog' OR ANIMAL_TYPE='Cat'
GROUP BY ANIMAL_TYPE ORDER BY ANIMAL_TYPE;
```
<hr>

- __(LEVEL2)__ [동명 동물 수 찾기](https://programmers.co.kr/learn/courses/30/lessons/59041)
```sql
SELECT NAME, COUNT(NAME) AS COUNT FROM ANIMAL_INS
GROUP BY NAME HAVING COUNT > 1;
```
<hr>

- __(LEVEL2)__ [입양 시각 구하기(1)](https://programmers.co.kr/learn/courses/30/lessons/59412)
```sql
SELECT date_format(DATETIME, '%k') AS HOUR,
COUNT(date_format(DATETIME, '%k')) AS COUNT
FROM ANIMAL_OUTS GROUP BY HOUR HAVING HOUR>=9 AND HOUR<=19
-- 24시간제에서 오후->오전 오름차순 배열
-- 따라서, 24시간을 빼줘서 오전->오후 순서로 오름차순을 지정해준다.
ORDER BY (HOUR-24);
```
<hr>

- __(LEVEL4)__ [입양 시각 구하기(2)](https://programmers.co.kr/learn/courses/30/lessons/59413)
```sql
아직 구현하지 못함
```
<hr>

[목록으로 돌아가기](https://github.com/ss-won/For-Coding-Test/blob/master/Programmers/sqlKit)