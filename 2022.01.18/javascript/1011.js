const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = parseInt(input[0]);
let x,y,distance;
let base;
let num;
let cnt;

for (let i = 1 ;i<T+1 ; i++){
  [x,y] = input[i].split(' ').map(Number);
  base = 1;
  cnt = 1;
  num = 1;
  distance = y-x;
  while (num<distance){
    base++;
    num = base*base;
    cnt += 2;
  }
  if (num - base + 1 > distance){
    cnt -= 1;
  }
  console.log(cnt);
}