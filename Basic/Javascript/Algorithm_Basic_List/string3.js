/*
        TASK
        주어진 문자열에서 문자열을 구성하고 있는 각각의 문자열들이 고유한지를 판단한다.
        [Reference] https: //github.com/JaeYeopHan/algorithm_basic_java/blob/master/src/test/java/algorithm/basic/UniqueCharacterInString.java
*/
    //(1)이중_포문을_사용한_방법
    const _useDobleFor = (s) => {
        let arr = s.split("");
        for(let i=0;i<arr.length-1;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]==arr[j]) return false;
            }
        }
        return true;
    }
    
    //(2)2개의_Array를_사용한_방법
    const _usetwoArray = (s) => {
        let arr = s.split("");
        let narr = [];
        for(let n of arr){
            if(!narr.includes(n)) narr.push(n);
            else return false;
        }
        return true;
    }

    //(3)HashSet을_사용한_방법
    const _useSet = (s) => {
        let set = new Set(s.split(""));
        return (s.length===set.size) ? true : false;
    }

    //@Test
    console.log(_useDobleFor("abcdefghij"), _usetwoArray("abcdefghij"), _useSet("abcdefghij"));
    console.log(_useDobleFor("abccde"), _usetwoArray("abccde"), _useSet("abccde"));