const [n,m] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);
const checkArr = new Array(n+1).fill(false);
const solution = (n,cnt,target,s) => {
    if (cnt === target) return s+"\n";
    let result = "";
    for (let i = 1 ; i<=n ; i++){
        if (! checkArr[i]){
            checkArr[i] = true;
            result += solution(n,cnt+1,target,s+`${i} `)
            checkArr[i] = false;
        }
    }
    return result;
};
console.log(solution(n,0,m,""));