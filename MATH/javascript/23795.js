console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(0,-1).map(Number).reduce((a,b)=>a+b));