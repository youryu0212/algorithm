const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const word = input[0];
const cnt_arr = new Array(26).fill(-1);

for (let i = 0 ; i<word.length;i++){
  idx = word[i].charCodeAt(0)-"a".charCodeAt(0)
  if (cnt_arr[idx] === -1){
    cnt_arr[idx] = i; 
  }
};

console.log(cnt_arr.join(" "));