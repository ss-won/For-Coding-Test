// 적절한 p, power를 찾으면 O(m-n)인 알고리즘이다. (m = s.length, n = p.length)
// 그러나 대부분의 경우 충돌이 발생할 수 있기 때문에, ckmatch연산을 넣어주었다. 
// 따라서 아래 코드의 시간복잡도는 O((m-n)*n) = O(n^2)이다. (m = s.length, n = p.length)

// 단순 문자열 패턴 찾기가 아니라 응용된 경우, 
// 적절한 p의 원시근 power값을 찾기 어려우니, 다른 알고리즘을 사용한다.
// 아래 알고리즘에서는 p = 307 power = 2 를 사용하였다. -> 알맞은 p, power를 사용하고 있어 ckmatch 없이도 정답 출력

function ckmatch(s, p, start){
    for(let i = start; i<p.length;i++){
        if(s[i] != p[i]) return false;
    }
    return true;
}

function rabin_karp(s, p){
    const res = [];
    let s_hash = 0, p_hash = 0, power = 1;
    if(s.length < p.length) return res;
    for(let i=p.length-1;i>=0;i--){
        s_hash = s_hash + s.charCodeAt(i) * power;
        p_hash = p_hash + p.charCodeAt(i) * power;
        if(i > 0) power *= 2;
    }
    p_hash %= 307;
    for(let i=0;i<=s.length-p.length;i++){
        if (i == 0){
            if (s_hash % 307 == p_hash && ckmatch(s, p, i))
                res.push(i)
            continue; 
        }
        s_hash = 2 * (s_hash - s.charCodeAt(i-1) * power) + s.charCodeAt(p.length-1+i);
        if (s_hash % 307 == p_hash && ckmatch(s, p, i))
            res.push(i);
    }
    return res;
}

// @TEST
console.log(rabin_karp("BBDBCABCABCA", "ABCA")); // [5, 8]
console.log(rabin_karp("ABABABABABACABABACABAD", "ABABACABA")); // [6, 12]
