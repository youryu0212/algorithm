const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,,r] = input[0].split(" ").map(Number);
const route = Array.from(Array(n+1),()=>[]);
input.slice(1).map(row=>row.split(" ").map(Number)).forEach(
    ([a,b])=>{
        route[a].push(b);
        route[b].push(a);
    }
);

route.forEach((node)=>node.sort((a,b)=>a-b));
const visited = new Array(n+1).fill(0);
let cnt = 0;

const dfs = (route,visited,r) => {
    if (visited[r]){
        return;
    }
    visited[r] = ++cnt;
    for (const node of route[r]){
        if (visited[node]){
            continue;
        }
        dfs(route,visited,node);
    }
}

const print = (arr) => {
    console.log(arr.join('\n'));
}

const solution = (route,visited,r) => {
    dfs(route,visited,r)
    print(visited.slice(1));   
}
solution(route,visited,r);