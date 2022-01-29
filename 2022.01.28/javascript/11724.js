const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
let arr = [];
let a,b;
for (let i = 0 ; i<=n ; i++){
  arr.push([]);
}
for (let i = 1 ; i<=m ; i++){
  [a,b] = input[i].split(' ').map(Number);
  arr[a].push(b);
  arr[b].push(a);
}
let visited = new Array(n+1).fill(false);
const dfs = (a) =>{
  if (visited[a]) return 0;
  visited[a] = true;
  for (let i = 0 ; i<arr[a].length ; i++){
    if ( visited[arr[a][i]] ) continue;
    dfs(arr[a][i]);
  }
  return 1;
}
let result = 0;
for (let i = 1 ; i<arr.length ; i++){
  result += dfs(i)
}
console.log(result);