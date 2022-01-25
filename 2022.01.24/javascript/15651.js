const [n,m] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

const solution = (n,cnt,target,acc) => {
  if (cnt == target){
    return acc+"\n";
  }
  let result = "";
  for (let i = 1 ; i<=n ; i++){
    result += solution(n,cnt+1,target,acc+i+" ");
  }
  return result;
}
console.log(solution(n,0,m,""));