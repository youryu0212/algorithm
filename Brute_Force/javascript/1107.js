const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const len = input[0].length;
const m = Number(input[1]);
let brokenButton
if (m>0) brokenButton = input[2].split(' ');

let result = Math.abs(n-100);
let trackCnt;
if (m!= 10 && m != 0){
  for (let i = 0 ; i<=1000000 ; i++){
    numString = String(i);
    digitBool = true;
    for (let digit of numString){
      if (brokenButton.includes(digit)){
        digitBool = false;
        break;
      }
    }
    if (!digitBool) continue;
    trackCnt = Math.abs(i-n) + numString.length;
    result = Math.min(result,trackCnt);
    if (result <= len) break;
  }
}
if (m==0) result = Math.min(result,len);
console.log(result);