function solution(progresses, speeds) {
    let answer = [];
    let remains = progresses.map((progress, i) => {
        return Math.ceil((100 - progress) / speeds[i], 10);
    })

    while (remains.length > 0) {
        let date = remains.shift();
        let deploy_n = 1;
        while (1) {
            if (date >= remains[0]) {
                remains.shift();
                deploy_n++;
            } else {
                break;
            }
        }
        answer.push(deploy_n);
    }
    return answer;
}