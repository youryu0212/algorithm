const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
let result = new Map();
let i;
for ( i = 1 ; i<=n ; i++){
    result.set(input[i],1);
}
for (; i<input.length-1 ; i++){
    if (result.has(input[i])){
        result.set(input[i],2);
    }
}
let cnt=0;
let answer = [];
for (let s of result.keys()){
  if (result.get(s) === 2){
    answer.push(s);
    cnt++;
  }
}

console.log(cnt);
console.log(answer.sort().join("\n"));