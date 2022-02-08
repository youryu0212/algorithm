const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let tree = Array.from(Array(n+1),() => new Array());
let parentNode = new Array(n+1).fill(0);
let a,b;

for (let i = 1 ; i<input.length-1 ; i++){
  [a,b] = input[i].split(' ').map(Number);
  tree[a].push(b);
  tree[b].push(a);
}


const bfs = ()=>{
  q = [];
  idx = 0;
  q.push(1);
  let node, nextNode;
  parentNode[0] = true;
  parentNode[1] = true;
  while (idx<q.length){
    node = q[idx];
    for (nextNode of tree[node]){
      if (parentNode[nextNode] !== 0) continue;
      parentNode[nextNode] = node;
      q.push(nextNode);
    }
    idx++;
  }
}
bfs()
let result = "";
for (let i = 2 ; i<=n ; i++){
  result+= parentNode[i];
  if (i !== n) result+="\n";
}
console.log(result);