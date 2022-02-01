const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n,m,b] = input[0].split(' ').map(Number);
let graph=[];
for (let i = 1 ; i<=n ; i++){
  graph.push(input[i].split(' ').map(Number));
}
let minTime = Infinity;
let height = 0;
for (let h = 0,i,j ; h<= 256 ; h++){
  let removeBlock = 0;
  let addBlock = 0;
  let curTime;
  for (i = 0 ; i<n ; i++){
    for (j = 0 ; j<m ; j++){
      if (graph[i][j]>h) removeBlock += graph[i][j]-h;
      if (graph[i][j]<h) addBlock += h - graph[i][j];
    }
  }
  if (removeBlock+b-addBlock <0) continue;
  curTime = removeBlock*2 + addBlock;
  if (curTime <= minTime){
    minTime = curTime;
    height = h;
  }
}
console.log(minTime,height);