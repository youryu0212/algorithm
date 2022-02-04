const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = [], result = 0;
const moves = [[-1,0],[0,1],[1,0],[0,-1]];
let m,n,k;
let graph;
let r,c;
const dfs = (r,c)=>{
  if (graph[r][c] === 0) return 0;
  graph[r][c] = 0;
  let nx,ny;
  for (let move of moves){
    [nx,ny] = [r+move[0], c+move[1]];
    if (nx>=n || ny>=m || nx<0 || ny<0) continue;
    dfs(nx,ny);
  }
  return 1;
}
for (let i = 1 ; i<input.length-1 ; ){
  [m,n,k] = input[i].split(' ').map(Number);
  r,c;
  graph=Array.from(Array(n), ()=>Array(m).fill(0));
  for (let j = 1 ; j<=k ; j++){
    [c,r] = input[i+j].split(' ').map(Number);
    graph[r][c] = 1;
  }
  result = 0;
  for (r = 0 ; r<n ; r++){
    for (c = 0 ; c<m ; c++){
      if (graph[r][c] === 0) continue;
      result += dfs(r,c)
    }
  }
  answer.push(result);
  i += k+1
}
console.log(answer.join("\n"));