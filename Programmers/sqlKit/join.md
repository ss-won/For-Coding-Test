# [분류] SQL 고득점 Kit - 코드 및 문제풀이

## JOIN
- __(LEVEL3)__ [없어진 기록 찾기](https://programmers.co.kr/learn/courses/30/lessons/59042)
```sql
-- RIGHT JOIN
SELECT o.ANIMAL_ID, o.NAME 
FROM ANIMAL_INS AS i
RIGHT JOIN ANIMAL_OUTS AS o
ON o.ANIMAL_ID = i.ANIMAL_ID
WHERE i.ANIMAL_ID IS NULL
ORDER BY ANIMAL_ID;
```
<hr>

- __(LEVEL3)__ [있었는데요 없었습니다](https://programmers.co.kr/learn/courses/30/lessons/59043)
```sql
SELECT i.ANIMAL_ID, i.NAME
FROM ANIMAL_INS AS i
LEFT JOIN ANIMAL_OUTS AS o
ON o.ANIMAL_ID = i.ANIMAL_ID
WHERE i.DATETIME > o.DATETIME
ORDER BY i.DATETIME;
```
<hr>

- __(LEVEL3)__ [오랜기간 보호한 동물(1)](https://programmers.co.kr/learn/courses/30/lessons/59044)
```sql
SELECT i.NAME, i.DATETIME
FROM ANIMAL_INS AS i
LEFT JOIN ANIMAL_OUTS AS o
ON o.ANIMAL_ID = i.ANIMAL_ID
WHERE o.NAME IS NULL AND o.DATETIME IS NULL
ORDER BY i.DATETIME LIMIT 3;
```
<hr>

- __(LEVEL4)__ [보호소에서 중성화한 동물](https://programmers.co.kr/learn/courses/30/lessons/59045)
```sql
SELECT i.ANIMAL_ID, i.ANIMAL_TYPE, i.NAME
FROM ANIMAL_INS AS i
LEFT JOIN ANIMAL_OUTS AS o
ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE i.SEX_UPON_INTAKE != o.SEX_UPON_OUTCOME;
```
<hr>

[목록으로 돌아가기](https://github.com/ss-won/For-Coding-Test/blob/master/Programmers/sqlKit)