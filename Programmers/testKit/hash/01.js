// 문제번호 42576 - 완주하지 못한 선수
function solution(participant, completion) {
    let answer = '';
    let map = new Map();
    for (let v of completion) {
        if (!map.has(v)) {
            map.set(v, 1);
        }
        else {
            map.set(v, map.get(v) + 1);
        }
    }

    participant.forEach((v) => {
        if (!map.has(v)) {
            answer = v;
            return answer;
        }
        if (map.get(v) <= 0) {
            answer = v;
            return answer;
        }
        map.set(v, map.get(v) - 1);
    })

    return answer;
}