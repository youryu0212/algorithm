const [n,m] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

const solution = (n,cnt,target,acc) => {
  if (cnt === target){
    return acc.join(" ") + "\n";
  }
  let result = ""
  for (let i = acc[acc.length-1] || cnt+1 ; i<=n ; i++){
    result += solution(n,cnt+1,target,acc.concat(i));
  }
  return result;
}
console.log(solution(n,0,m,[]));