// # Famous Algorithm - Dijkstra(다익스트라 알고리즘 : 최단 경로 도출 알고리즘)
// 패스트캠퍼스 강의(나동빈 강사님)를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.
// graph reference : https://www.fun-coding.org/Chapter20-shortest-live.html
import Priority_Queue from '../Datastructure/priorityqueue.js';

const graph = {
    'A': {'B':8, 'C':1, 'D':2},
    'B': {},
    'C': {'B':5, 'D':2},
    'D': {'E':3, 'F':5},
    'E': {'F':1},
    'F': {'A':5}
};

function Dijkstra(graph, start){
    const pq = new Priority_Queue();
    // distances 객체 초기화
    let distances = {};
    Object.keys(graph).forEach(v=>{distances[v] = Number.POSITIVE_INFINITY});

    // distances 객체에 출발점 등록, 우선순위 큐에 추가
    distances[start] = 0;
    pq.push([distances[start], start]);
    
    // 우선순위 큐가 빌때까지, 우선순위 큐에서 값을 하나씩 뺀다.
    // 해당 값의 val값에서 이동할 수 있는 모든 값에 누적거리를 더한 것과 비교하여
    // 더 작으면 distances 배열을 업데이트하고, 큐에 넣는다.
    while(!pq.empty()){
        let [distance, target] = pq.pop();
        for(let [key, val] of Object.entries(graph[target])){
            if(distances[key] > distance + val){
                distances[key] = distance + val;
                pq.push([distances[key], key]);
            }
            else continue;
        }
    }

    return distances;
}

// @ Test
//console.log(Dijkstra(graph, 'A')); // { A: 0, B: 6, C: 1, D: 2, E: 5, F: 6 }