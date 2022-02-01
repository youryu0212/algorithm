const [n,m] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

let checkSet = new Set();
let checkCnt = new Array(n).fill(false);
const solution = (n,cnt,target,acc) => {
  if (cnt === target){ 
    newStr = acc.sort((a,b) => Number(a)-Number(b)).join("")
    if (checkSet.has(newStr)) return false;
    checkSet.add(newStr);
    return acc.join(" ") + "\n";
  }
  let result = "";
  for (let i = 1 ; i<=n ; i++){
    if (checkCnt[i]) continue
    checkCnt[i] = true;
    newStr = solution(n,cnt+1,target,acc.concat(i));
    if (newStr) result += newStr;
    checkCnt[i] = false;
  }
  return result;
};
console.log(solution(n,0,m,[]));
