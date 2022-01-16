const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().toUpperCase().split('\n');

const cnt_arr = new Array(26).fill(0);
for (let i = 0 ; i<input[0].length ; i++){
  cnt_arr[input[0][i].charCodeAt(0) - "A".charCodeAt(0)]++;
}
let max_num = Math.max(...cnt_arr);
let result;
for (let i = 0 ; i<cnt_arr.length ; i++){
  if (cnt_arr[i] === max_num){
    if (result !== undefined){
      result = "?"
      break;
    }
    result = String.fromCharCode(i+"A".charCodeAt(0));
  }
}
console.log(result);