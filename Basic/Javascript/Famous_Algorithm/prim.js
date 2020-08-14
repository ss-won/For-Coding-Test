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

const graph = {
    'A': { 'B': 7, 'D': 5 },
    'B': { 'A': 7, 'C': 8, 'D': 9, 'E': 7 },
    'C': { 'B': 8, 'E': 5 },
    'D': { 'A': 5, 'B': 9, 'E': 7, 'F': 6 },
    'E': { 'B': 7, 'C': 5, 'D': 7, 'F': 8, 'G': 9 },
    'F': { 'D': 6, 'E': 8, 'G': 11 },
    'G': { 'E': 9, 'F': 11 }
}

// #1: 정점 기준으로 탐색 (EVlogV)
function prim1(graph, start){
    const mst = [], adj = {};
    const nodes = new Priority_Queue();
    let total = 0;

    for(let v of Object.keys(graph)){
        nodes.push([Number.POSITIVE_INFINITY, v]);
    }
    nodes.set(start, 0);//O(VlogV)
    adj[start] = start;
    
    // while -> O(VlogV)
    while(!nodes.empty()){
        console.log(nodes.heapq);
        let [cw, cv] = nodes.pop();
        mst.push([adj[cv], cv, cw]);
        total += cw;
        // for -> O(EVlogV)
        for(let [vt, wt] of Object.entries(graph[cv])){
            if(nodes.get(vt) !== undefined && nodes.get(vt) > wt){
                nodes.set(vt, wt);//O(VlogV)
                adj[vt] = cv;
            }
        }
        
    }
    return [mst, total];
}

// #2 간선 기준으로 탐색 (ElogE)
function prim2(edges, start){
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
console.log(prim1(graph, 'A'));
console.log(prim2(edges, 'A'));

/* 
[
    [
        ['A', 'A', 0],
        ['A', 'D', 5],
        ['D', 'F', 6],
        ['D', 'E', 7],
        ['E', 'C', 5],
        ['A', 'B', 7],
        ['E', 'G', 9]
    ],
    39
]
[
    [5, 'A', 'D],
    [6, 'D', 'F'],
    [7, 'D', 'E'],
    [5, 'E', 'C'],
    [7, 'A', 'B'],
    [9, 'E', 'G']
]
*/