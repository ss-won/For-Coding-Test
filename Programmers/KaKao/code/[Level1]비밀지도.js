const solution = (n, arr1, arr2) => {
    let answer = [];
    let barr1 = arr1.map(v => v.toString(2).split(""))
                    .map((v)=>{
                        while(v.length!==n){
                            v.unshift('0');
                        }
                        v = v.map(val=>val*1);
                        return v;
                    });
    let barr2 = arr2.map(v => v.toString(2).split(""))
                    .map((v) => {
                        while (v.length !== n) {
                            v.unshift('0');
                        }
                        v = v.map(val=>val*1);
                        return v;
                    });

    answer = barr1.map((val,idx)=>{
        return val.map((v, i) => v > barr2[idx][i] ? v : barr2[idx][i]);
    })

    answer = answer.map((val)=>val.map(v=>v?"#":" ").join(""));
   return answer;
}


/***
 * @test
 * console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
 ***/