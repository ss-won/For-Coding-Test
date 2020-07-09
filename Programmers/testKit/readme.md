# [분류] SQL 고득점 Kit
출제율 { 상 : ❤️ | 중: 💛 | 하: 💙 }
<br/>

## SELECT(💙)
- __(LEVEL1)__ [모든 레코드 조회하기](https://programmers.co.kr/learn/courses/30/lessons/59034)
```sql
-- mysql
SELECT * from ANIMAL_INS
ORDER BY ANIMAL_ID;
```

- __(LEVEL1)__ [역순 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/59035)
```sql
-- mysql
SELECT NAME, DATETIME FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC;-- 내림차순 정렬(역순정렬)
```

- __(LEVEL1)__ [아픈 동물 찾기](https://programmers.co.kr/learn/courses/30/lessons/59036)
```sql
-- mysql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick'
ORDER BY ANIMAL_ID;
```

- __(LEVEL1)__ [어린 동물 찾기](https://programmers.co.kr/learn/courses/30/lessons/59037)
```sql
-- mysql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION != 'Aged'
ORDER BY ANIMAL_ID;
```

- __(LEVEL1)__ [동물의 아이디와 이름](https://programmers.co.kr/learn/courses/30/lessons/59403)
```sql
-- mysql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```

-  __(LEVEL1)__ [여러기준으로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/59404)
```sql
-- mysql
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC;
```

- __(LEVEL1)__ [상위 n개 레코드](https://programmers.co.kr/learn/courses/30/lessons/59405)
```sql
-- mysql`
SELECT NAME FROM ANIMAL_INS
WHERE DATETIME = (SELECT MIN(DATETIME) FROM ANIMAL_INS);-- subquery
```

## SUM/MAX/MIN(💛)

## GROUP BY(💛)

## IS NULL(💙)

## JOIN(❤)

## String, Date(💙)

<hr>

## REFERENCE
- [프로그래머스 코딩테스트 연습](https://programmers.co.kr/learn/challenges)

