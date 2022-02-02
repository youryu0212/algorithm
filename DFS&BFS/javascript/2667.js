const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);

let graph = [];
for (let i = 1 ; i<input.length-1 ; i++){
  graph.push([]);
  for (let j = 0 ; j<input[i].length ; j++){
    graph[i-1].push(Number(input[i][j]));
  }
}
let result = [];
let cnt,houseCnt= 0;
const moves = [[-1,0],[0,1],[1,0],[0,-1]];
const rangeCheck = (x,y) => {
  if (x>=n || y>= n || x<0 || y<0) return false;
  return true;
}
const dfs = (r,c) => {
  if (graph[r][c] === 0) return 0;
  graph[r][c] = 0;
  let nx,ny;
  for (let move of moves){
    nx = r + move[0];
    ny = c + move[1];
    if (rangeCheck(nx,ny) && graph[nx][ny] === 1) {
      cnt++;
      dfs(nx,ny);
    }
  }
  return 1;
}

for (let i = 0 ; i<n ; i++){
  for (let j = 0 ; j<n ; j++){
    if (graph[i][j] === 1){
      cnt = 1;
      dfs(i,j);
      result.push(cnt);
      houseCnt++;
    }
  }
}
console.log(houseCnt);
console.log(result.sort((a,b)=>a-b).join("\n"));