const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));

let five_cnt = parseInt(n/5);
let num;
while (five_cnt>=0){
  num =  n-(five_cnt*5);
  if (num%3 === 0){
    result = five_cnt + num/3;
    break;
  }
  five_cnt--;
}
if (five_cnt <0) result = -1;
console.log(result);