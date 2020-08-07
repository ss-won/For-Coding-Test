// # Famous Algorithm - DFS(깊이우선탐색)
// 패스트캠퍼스 강의(나동빈 강사님)를 수강하고, 파이썬으로 작성했던 구문을 -> 자바스크립트로 작성하였습니다.
// graph reference : https://www.fun-coding.org/Chapter18-bfs-live.html

const graph = {};
graph['A'] = ['B', 'C']
graph['B'] = ['A', 'D']
graph['C'] = ['A', 'G', 'H', 'I']
graph['D'] = ['B', 'E', 'F']
graph['E'] = ['D']
graph['F'] = ['D']
graph['G'] = ['C']
graph['H'] = ['C']
graph['I'] = ['C', 'J']
graph['J'] = ['I']

let visited = []
let stack = []

function dfs(adj, start){
    stack.push(start);
    while(stack.length){
        let cur = stack.pop();
        if(!visited.includes(cur)){
            visited.push(cur);
            stack = [...stack, ...adj[cur]];
        }
    }
}

/*
// @ Test
dfs(graph, 'A');
console.log(visited);// ['A', 'C', 'I', 'J', 'H', 'G', 'B', 'D', 'F', 'E']
*/