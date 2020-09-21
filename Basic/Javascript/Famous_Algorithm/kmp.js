function getfailure(p){
    const failure = Array.from(p.split("").map((v)=>0));
    let j = 0;
    for(let i = 1; i < p.length; i++){
        while(j > 0 && p[i] !== p[j])
            j = failure[j-1];
        if(p[i] === p[j])
            failure[i] = ++j; 
    }
    return failure;
}

function kmp(s, p){
    const failure = getfailure(p);
    const res = [];
    let j = 0;
    for(let i = 0; i < s.length; i++){
        while(j > 0 && s[i] !== p[j])
            j = failure[j-1];
        if(s[i] === p[j]){
            if(j === p.length-1){
                res.push(i-(p.length-1));
                j = failure[j];
            }
            else{
                j++;
            }
        }
    }
    return res;
}

//@ TEST
console.log(kmp("ABABABABABACABABACABAD","ABABACABA")); // [6, 12]
console.log(kmp("ABC ABCDAB ABCDABCDABDE", "ABCDABD")); // [15]