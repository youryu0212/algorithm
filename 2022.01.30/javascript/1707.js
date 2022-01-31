const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input[0]);
let j = 0;

const dfs = (node,nodeArray,visited,result) => {
  let nextNode;
  if (result === "NO") return;
  if (visited[node][0]) return 0;
  let nodeSet = visited[node][1];
  visited[node][0] = true;
  for (let i = 0 ; i<nodeArray[node].length ; i++){
    nextNode = nodeArray[node][i];
    if (visited[nextNode][0]) continue;
    if (visited[nextNode][1] === nodeSet) {
      result = "NO";
      return
    }
    if (nodeSet === 1) visited[nextNode][1] = 2;
    if (nodeSet === 2) visited[nextNode][1] = 1;
    dfs(nextNode,nodeArray,visited,result);
  }
}

for (let i = 1 ; i<input.length-1 ; i += j){
  let nodeArray = [];
  let visited = [];
  let result = "";
  let nodeSet;
  const [v,e] =  input[i].split(' ');
  for ( k = 0 ; k<=v ; k++){
    nodeArray.push([]);
    visited.push([false,0]);
  }
  let a,b;
  for (j=1;j<=e ; j++){
    [a,b] = input[i+j].split(' ').map(Number);
    nodeArray[a].push(b);
    nodeArray[b].push(a);
  }
  for (let k = 1 ; k <=v ; k++){
    if (visited[k][1]===0) visited[k][1] = 1;
    dfs(k,nodeArray,visited,result);
  }
  if (result !== "NO"){
    for (let k = 1; k<=v ; k++){
      nodeSet = visited[k][1]
      for (let l = 0 ; l<nodeArray[k].length ; l++){
        if (visited[nodeArray[k][l]][1] === nodeSet){
          result = "NO";
          break;
        }
      }
      if(result === "NO"){
        break;
      }
      result = "YES";
    }
  }
  console.log(result);
}