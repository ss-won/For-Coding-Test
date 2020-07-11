# [분류] SQL 고득점 Kit - 코드 및 문제풀이

## STRING, DATE
- __(LEVEL2)__ [루시와 엘라 찾기](https://programmers.co.kr/learn/courses/30/lessons/59046)
```sql
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
-- WHERE NAME = 'Lucy' OR NAME ='Ella' OR NAME ='Pickle' OR NAME ='Rogan' OR NAME ='Sabrina' OR NAME ='Mitty';
WHERE NAME IN ('Lucy','Ella','Pickle','Rogan','Sabrina','Mitty');
```
<hr>

- __(LEVEL2)__ [이름에 el들어가는 동물 찾기](https://programmers.co.kr/learn/courses/30/lessons/59047)
```sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE NAME LIKE '%el%' AND ANIMAL_TYPE = 'Dog'
-- WHERE INSTR(LOWER(NAME),'el') != 0 AND ANIMAL_TYPE = 'Dog'
ORDER BY NAME;
```
<hr>

- __(LEVEL2)__ [중성화 여부 파악하기](https://programmers.co.kr/learn/courses/30/lessons/59409)
```sql
SELECT ANIMAL_ID, NAME, IF(SEX_UPON_INTAKE LIKE 'Spayed%' OR SEX_UPON_INTAKE LIKE 'Neutered%','O','X') AS '중성화'
FROM ANIMAL_INS;
```
<hr>

- __(LEVEL3)__ [오랜기간 보호한 동물(2)](https://programmers.co.kr/learn/courses/30/lessons/59411)
```sql
SELECT i.ANIMAL_ID, i.NAME 
FROM ANIMAL_INS AS i
JOIN ANIMAL_OUTS AS o
ON o.ANIMAL_ID = i.ANIMAL_ID
ORDER BY DATEDIFF(o.DATETIME,i.DATETIME) DESC LIMIT 2;
```
<hr>

- __(LEVEL2)__ [Datetime에서 Date으로 형변환](https://programmers.co.kr/learn/courses/30/lessons/59414)
```sql
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME,'%Y-%m-%d') FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```
<hr>

[목록으로 돌아가기](https://github.com/ss-won/For-Coding-Test/blob/master/Programmers/sqlKit)