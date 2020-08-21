function solution(genres, plays) {
    let answer = [];

    // # 객체 생성
    const inner = {
        playarr: {},
        count: 0
    };
    
    const prior = plays.reduce((acc, v, i) => {
        inner.playarr = {};
        inner.count = 0;
        if (!acc[genres[i]]) {
            inner.playarr[i] = v;
            inner.count += v;
            acc[genres[i]] = {
                ...inner
            };
        } else {
            acc[genres[i]] = {
                ...acc[genres[i]],
                playarr: {
                    ...acc[genres[i]].playarr,
                    [i]: v
                },
                count: acc[genres[i]].count + v
            }
        }
        return acc;
    }, {});

    // prior 총 재생횟수 기준 객체 내림차순 정렬
    let pq = Object.values(prior).sort((a, b) => b.count - a.count);

    // #2, #3에 맞춰서 object 정렬 후, answer에 수록곡 담기
    for (let music of pq) {
        let ordered = Object.keys(music.playarr).sort((a, b) => {
            if (music.playarr[a] === music.playarr[b]) {
                return a - b;
            }
            return music.playarr[b] - music.playarr[a];
        })
        answer = (ordered.length >= 2) ?
            [...answer, ordered[0] * 1, ordered[1] * 1] :
            [...answer, ordered[0] * 1]
    }

    return answer;
}