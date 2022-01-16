const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let result = 0;
let cnt_arr;
let idx, check_bool, prev_idx;
for (let i = 1 ; i<input.length -1 ; i++){
  cnt_arr = new Array(26).fill(false);
  check_bool = true;
  prev_idx = input[i][0].charCodeAt(0) - "a".charCodeAt(0);
  for (let j = 1 ; j<input[i].length ; j++){
      idx = input[i][j].charCodeAt(0) - "a".charCodeAt(0);
      if (cnt_arr[idx]){
        check_bool = false;
        break;
      }
      if (prev_idx !== idx){
        cnt_arr[prev_idx] = true;
      }
      prev_idx = idx;
  }
  if (check_bool){
    result++;
  }
}
console.log(result);