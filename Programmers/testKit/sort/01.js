// 문제번호 42748 - K번째 수
function solution(array, commands) {
    var answer = [];

    commands.forEach((val, idx) => {
        var tmp = array.slice(val[0] - 1, val[1]);
        tmp.sort((a, b) => {
            return a - b
        });
        var i = val[2];
        answer.push(tmp[i - 1]);
    })
    return answer;
}