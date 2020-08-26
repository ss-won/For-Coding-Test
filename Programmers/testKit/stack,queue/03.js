function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    let cur_w = 0;
    let moving = [],
        state = [];

    let curr = truck_weights.shift();
    cur_w += curr;
    moving.push(curr);
    state.push(1);
    //console.log(answer, moving, moved);
    while (moving.length > 0) {
        answer++; // 매 틱마다 1초씩 증가
        //console.log(answer, moving, moved);
        if (state.length > 0) {
            state = state.map(v => v + 1); // 매 틱마다 state 변수 1 증가
            // 1. 현재 빠져나갈 수 있는 트럭이 있는지 확인
            if (state[0] > bridge_length) {
                state.shift();
                cur_w -= moving.shift();
            }
        }
        // 2. 현재 진입할 수 있는 트럭이 있는지 확인
        if (truck_weights.length > 0) {
            if (cur_w + truck_weights[0] <= weight) {
                curr = truck_weights.shift();
                cur_w += curr;
                moving.push(curr);
                state.push(1);
            }
        }
    }
    return answer
}