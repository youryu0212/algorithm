const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n,m,v] = input[0].split(' ').map(Number);
let a,b;
let route = [];
for ( let i = 0 ; i<=n ; i++){
  route.push([]);
}
for (let i = 1 ; i<=m ;  i++){
  [a,b] = input[i].split(' ').map(Number);
  route[a].push(b);
  route[b].push(a);
}
for (let i = 0 ; i<=n ; i++){
  route[i].sort((a,b) => a-b);
}

let visited = new Array(n+1).fill(false);
let result = [];
const dfs = (a) =>{
  result.push(a);
  visited[a] = true;
  for (let i = 0 ; i<route[a].length ; i++){
    if (visited[route[a][i]]) continue;
    dfs(route[a][i]);
  }
}
dfs(v);
console.log(result.join(" "));

q = [v];
result = [];
visited = new Array(n+1).fill(false);
visited[v] = true;
let nextNode;
const isEmptyArray = (arr)=> Array.isArray(arr) && arr.length === 0;
while (!isEmptyArray(q)){
  nextNode = q.shift();
  result.push(nextNode);
  for (let i = 0 ;i<route[nextNode].length ; i++){
    if (visited[route[nextNode][i]]) continue;
    visited[route[nextNode][i]] = true;
    q.push(route[nextNode][i]);
  }
}
console.log(result.join(" "));