const [a,p] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);
let d = [a];
let check = new Array((9**5)*6+1).fill(0);
let idx = 0,num,newNum;
while (true){
  num = d[idx++]
  newNum = 0;
  check[num]++
  if (check[num] ===3 ) break;
  while (num){
    newNum += (num%10)**p
    num = Math.floor(num/10);
  }
  d.push(newNum);
}
let result = 0;
for (let i = 1 ; i<check.length ; i++){
  if (check[i] === 1){
    result++;
  }
}
console.log(result);