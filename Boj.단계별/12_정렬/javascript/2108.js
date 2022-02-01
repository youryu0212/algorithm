const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let nums = input.slice(1,input.length-1).reduce((acc,cur) => {acc.push(Number(cur)); return acc},[]);
nums.sort((a,b) => a-b);
// cnt[8001] = 최빈 횟수
const cnt = nums.reduce((cnt,cur) => {
    if (cur<=0) {
      cnt[-cur]++;
      if (cnt[-cur]>cnt[8001]) cnt[8001] = cnt[-cur];
    }
    else {
      cnt[cur+4000]++;
      if (cnt[cur+4000]>cnt[8001]) cnt[8001] = cnt[cur+4000];
    }
    
    return cnt
},new Array(8002).fill(0));

let c = 0,mode = 0;
for (let i = 4000 ; i>=0 ; i--){
  if ( c ===2 ) break;
  if (cnt[8001] === cnt[i]){
    c++;
    mode = -i;
  }
}
for (let i = 4001 ; i<8001 ; i++){
  if (c ===2 ) break;
  if (cnt[8001] === cnt[i]){
    c++;
    mode = i-4000;
  }
}
if (mode === -0){
  mode = 0;
}
const average = Math.round(nums.reduce((acc,cur) => acc+cur)/n);
const midNum = nums[Math.floor(n/2)];
const numRange = nums[nums.length-1] - nums[0];


console.log(average);
console.log(midNum);
console.log(mode);
console.log(numRange);