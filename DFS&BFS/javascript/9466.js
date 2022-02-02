const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const dfs= (n) => {
  if (visited[n]){
    for (let i = 0 ; i<route.length ; i++){
      if (route[i] ===n) break;
      result++;
    }
    return
  }
  visited[n] = true;
  route.push(arr[n]);
  dfs(arr[n]);
}

let arr,n,visited,result;
for (let i = 1 ; i<input.length-1 ; i+=2){
  
  n = Number(input[i]);
  arr = input[i+1].split(' ').reduce((acc,cur)=>{acc.push(Number(cur));return acc},[0]);
  visited = new Array(n+1).fill(false);
  result = 0
  for (let i = 1 ; i<=n ; i++){
    if (!visited[i]) {
      route = [i]
      dfs(i);
    }
  }
  console.log(result)
}