# [분류] SQL 고득점 Kit

## SELECT
- __(LEVEL1)__ 모든 레코드 조회하기
```sql
-- mysql
SELECT * from ANIMAL_INS
ORDER BY ANIMAL_ID;
```
<hr>

- __(LEVEL1)__ 역순 정렬하기
```sql
-- mysql
SELECT NAME, DATETIME FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC;-- 내림차순 정렬(역순정렬)
```
<hr>

- __(LEVEL1)__ 아픈 동물 찾기
```sql
-- mysql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick'
ORDER BY ANIMAL_ID;
```
<hr>

- __(LEVEL1)__ 어린 동물 찾기
```sql
-- mysql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION != 'Aged'
ORDER BY ANIMAL_ID;
```
<hr>

- __(LEVEL1)__ 동물의 아이디와 이름
```sql
-- mysql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```
<hr>

-  __(LEVEL1)__ 여러기준으로 정렬하기
```sql
-- mysql
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC;
```
<hr>

- __(LEVEL1)__ 상위 n개 레코드
```sql
-- mysql`
SELECT NAME FROM ANIMAL_INS
WHERE DATETIME = (SELECT MIN(DATETIME) FROM ANIMAL_INS);-- subquery
```
<hr>

[목록으로 돌아가기](https://github.com/ss-won/For-Coding-Test/blob/master/Programmers/sqlKit)


