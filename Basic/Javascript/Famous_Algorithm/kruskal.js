// # Famous Algorithm - kruskal(크루스칼) algorithm : mst(최소신장트리) 구하기
// 패스트캠퍼스 강의(나동빈 강사님)를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.
// graph reference : https://www.fun-coding.org/Chapter20-kruskal-live.html

const graph = {
    vertices: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    // 무방향 그래프라서, 간선의 개수 2배임
    edges:[
        [7, 'A', 'B'],
        [5, 'A', 'D'],
        [7, 'B', 'A'],
        [8, 'B', 'C'],
        [9, 'B', 'D'],
        [7, 'B', 'E'],
        [8, 'C', 'B'],
        [5, 'C', 'E'],
        [5, 'D', 'A'],
        [9, 'D', 'B'],
        [7, 'D', 'E'],
        [6, 'D', 'F'],
        [7, 'E', 'B'],
        [5, 'E', 'C'],
        [7, 'E', 'D'],
        [8, 'E', 'F'],
        [9, 'E', 'G'],
        [6, 'F', 'D'],
        [8, 'F', 'E'],
        [11, 'F', 'G'],
        [9, 'G', 'E'],
        [11, 'G', 'F']
    ]
};

const parent = {};
const rank = {};

function find(vertex){
    if(parent[vertex] !== vertex){
        parent[vertex] = find(parent[vertex]);
    }
    return parent[vertex];
}

function union(u,v){
    const rootu = find(u);
    const rootv = find(v);
    if(rank[u] > rank[v]){
        parent[rootv] = rootu;
    }
    else{
        parent[rootu] = rootv;
        if(rank[u] === rank[v]) 
            rank[u] += 1;
    }
}

function kruskal(graph){
    let mst = [];
    // 1단계 : 초기화 => O(V)
    for(let v of graph.vertices){
        parent[v] = v;
        rank[v] = 0;
    }

    // 2단계 : 가중치 순으로 edges 정렬 => O(ElogE)
    graph.edges.sort((a,b)=> {
        if(a[0]>b[0])
            return 1;
        else if(a[0]<b[0]){
            return -1;
        }
        else return 0;
    });

    // 3단계 : edge 별로 find해서 -> root가 일치하지 않으면 union 연산
    for(let edge of graph.edges){
        //console.log(edge);
        let [weight, u, v] = edge;
        if(find(u)!==find(v)){
            union(u, v);
            mst.push(edge);
        } 
    }

    return mst;
}

console.log(kruskal(graph));