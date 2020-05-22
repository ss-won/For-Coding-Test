/*
        TASK
        주어진 문서(단어별로 나뉘어진 배열)에서 특정 단어의 빈도를 구한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basic/FrequencyStringInDocument.java
*/

const getwordFreq = (sarr, word) => {
    let wordMap = new Map();
    for(let s of sarr){
        //만약에 대소문자를 구별하지 않는다는 설정이 있었을 경우!
        //아예 다 대문자로 바꿔주거나, 아예 다 소문자로 바꿔서 Map에 넣어준다.
        let ns = s.toLowerCase();
        if(wordMap.has(ns)){
            wordMap.set(ns,wordMap.get(ns)+1);
        }
        else{
            wordMap.set(ns,1);
        }
    }
    return wordMap.has(word.toLowerCase()) ? wordMap.get(word) : 0; 
}

//@Test
console.log(getwordFreq(["Whyrano","...","Whyrano","...","Whyrano"],"whyrano"));//3;