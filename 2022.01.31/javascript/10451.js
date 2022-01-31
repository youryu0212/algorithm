const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const search = (idx,visited,arr) =>{
  if (visited[idx]) return 1;
  visited[idx] = true;
  return search(arr[idx-1],visited,arr);
}
for ( let i = 1 ; i<input.length-1 ; i+=2){
  const n = Number(input[i]);
  const arr = input[i+1].split(' ').map(Number)
  let visited = new Array(n+1).fill(false);
  let result = 0;
  for (let j = 1 ; j<=n ; j++){
    if (visited[j]) continue;
    result += search(j,visited,arr);
  }
  console.log(result);
}