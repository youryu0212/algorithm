const s = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0];
const cnt = s.split('').reduce((array,cur) => {
  array[cur]++;
  return array;
},new Array(10).fill(0))
let result = "";

for (let i = 9 ; i>= 0 ;i--){
  while (cnt[i]--) result += i;
}
console.log(result)