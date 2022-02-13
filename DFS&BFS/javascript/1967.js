const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const data = [];
let idx=1 ,cost = 0;
for (let i = 0 ; i<=n ; i++){
  data.push([]);
}
// nodeNum, nodeCost;
for (let i = 1 ; i<n ; i++){
  let [a,b,c] = input[i].split(' ').map(Number);
  data[a].push([b,c]);
  data[b].push([a,c]);
}
const dfs = (startNodeInfo) =>{
  let idx,cost;
  const visited = new Array(n+1).fill(false);
  visited[startNodeInfo[0]] = true;
  const stack = [startNodeInfo];
  const result = [0,0];
  let nextIdx,nextCost;
  while (stack.length !== 0){
    [idx,cost] = stack.pop();
    if (cost > result[1]){
      result[0] = idx;
      result[1] = cost;
    }
    for (let i = 0 ; i< data[idx].length ; i++){
      [nextIdx,nextCost] = [data[idx][i][0], data[idx][i][1]];
      if (visited[nextIdx]) continue;
      stack.push([nextIdx,nextCost+cost])
      visited[nextIdx] = true;
    }
  }
  return result;
}
for (let i = 0 ; i<2 ; i++){
  cost = 0;
  [idx,cost] = dfs([idx,cost]);
}
console.log(cost);