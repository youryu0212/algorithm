let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const v = Number(input[0]);
let tree = new Map();
let node;
for (let i = 1 ; i<input.length-1 ; i++){
  input[i] = input[i].split(' ').map(Number);
  node = input[i][0];
  tree.set(node,[]);
  for (let j = 1 ; j<input[i].length-1 ; j+=2){
    tree.get(node).push([input[i][j], input[i][j+1]]);
  }
}

const dfs = (node,visited,value) =>{
  visited[node] = true;
  let longestNode = node;
  let longestCost = value;
  let searchResult;
  for (const [nextNode,cost] of tree.get(node)){
    if (visited[nextNode]) continue;
    searchResult = dfs(nextNode,visited,value+cost);
    if (searchResult[1] > longestCost){
      longestNode = searchResult[0];
      longestCost = searchResult[1];
    }
  }
  return [longestNode,longestCost];
}

let visited = new Array(v+1).fill(false);
let visitedTwo = new Array(v+1).fill(false);
let [firstNode, firstCost] = dfs(1,visited,0);
let [longestNode, longestCost] = dfs(firstNode,visitedTwo,0);
console.log(longestCost);
