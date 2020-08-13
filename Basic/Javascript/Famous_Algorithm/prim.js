// # Famous Algorithm - prim(크루스칼) algorithm : mst(최소신장트리) 구하기
// 패스트캠퍼스 강의(나동빈 강사님)를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.
// graph reference : https://www.fun-coding.org/Chapter20-prim-live.html
import Priority_Queue from '../Datastructure/priorityqueue.js';

const edges = [
    [7, 'A', 'B'], [5, 'A', 'D'],
    [8, 'B', 'C'], [9, 'B', 'D'], [7, 'B', 'E'],
    [5, 'C', 'E'],
    [7, 'D', 'E'], [6, 'D', 'F'],
    [8, 'E', 'F'], [9, 'E', 'G'],
    [11, 'F', 'G']
]

function prim(edges, start){
    const mst = [];
    const adj = {};
    const con_nodes = new Set();
    const candidates = new Priority_Queue();
    
    // O(E)
    edges.forEach(edge => {
        let [weight, n1, n2] = edge;
        adj[n1] = [...(adj[n1]||[]), [weight, n1, n2]];
        adj[n2] = [...(adj[n2]||[]), [weight, n2, n1]];
    })
    
    con_nodes.add(start);
    // O(logE)
    for(let edge of adj[start]){
        candidates.push(edge);
    }

    // O(ElogE)
    while(!candidates.empty()){
        let [w, u, v] = candidates.pop();
        if(!con_nodes.has(v)){
            con_nodes.add(v);
            mst.push([w, u, v]);
            for(let [w, n1, n2] of adj[v]){
                if(!con_nodes.has(n2))
                    candidates.push([w, n1, n2]);
            }
        }
    }
    return mst;
}

// @ Test
console.log(prim(edges, 'A'));
/* 
[
    [5, 'A', 'D],
    [6, 'D', 'F'],
    [7, 'D', 'E'],
    [5, 'E', 'C'],
    [7, 'A', 'B'],
    [9, 'E', 'G']
]
*/