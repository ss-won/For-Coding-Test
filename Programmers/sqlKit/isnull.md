# [분류] SQL 고득점 Kit - 코드 및 문제풀이

## IS NULL
- __(LEVEL1)__ [이름이 없는 동물의 아이디](https://programmers.co.kr/learn/courses/30/lessons/59039)
```sql
SELECT ANIMAL_ID FROM ANIMAL_INS
WHERE NAME IS NULL;
```
<hr>

- __(LEVEL1)__ [이름이 있는 동물의 아이디](https://programmers.co.kr/learn/courses/30/lessons/59407)
```sql
SELECT ANIMAL_ID FROM ANIMAL_INS
WHERE NAME IS NOT NULL;
```
<hr>

- __(LEVEL2)__ [NULL 처리하기](https://programmers.co.kr/learn/courses/30/lessons/59410)
```sql
-- ifnull(exp1,exp2) exp1->exp2로 출력한다.
SELECT ANIMAL_TYPE, ifnull(NAME,'No name'), SEX_UPON_INTAKE FROM ANIMAL_INS;
```
<hr>

[목록으로 돌아가기](https://github.com/ss-won/For-Coding-Test/blob/master/Programmers/sqlKit)