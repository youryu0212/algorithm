const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
let s_arr = input[0].split(' ');
const num_arr = [];
let temp;
for (let i = 0 ; i<s_arr.length ; i++){
  temp = "";
  for (let j = s_arr[i].length -1 ;j>=0 ; j--){
    temp += s_arr[i][j];
  }
  num_arr.push(Number(temp));
}
console.log(Math.max(...num_arr));