const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let w,h;
let graph;
let answer = "";

const moves = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
let nx,ny;
const rangeCheck = (r,c)=>{
  if (r>=h || c>=w || r<0 || c<0 ) return false;
  return true;
}
const dfs = (r,c)=>{
  if (graph[r][c] === 0) return 0;
  graph[r][c] = 0;
  for (move of moves){
    [nx,ny] = [r+move[0], c+move[1]];
    if (rangeCheck(nx,ny) && graph[nx][ny] === 1){
      dfs(nx,ny);
    }
  }
  return 1;
}

for (let i = 0 ; i<input.length-2 ; ){
  [w,h] = input[i].split(' ').map(Number);
  graph = [];
  let result = 0;
  for (let j = 1 ; j<=h ; j++){
    graph.push(input[i+j].split(' ').map(Number))
  }
  for (let r = 0 ; r<h ; r++){
    for (let c = 0 ; c<w ; c++){
      if (graph[r][c] === 1) result += dfs(r,c);
    }
  }
  answer += result+"\n";
  i += h+1;
}
console.log(answer);