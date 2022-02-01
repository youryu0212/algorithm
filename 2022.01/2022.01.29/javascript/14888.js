const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0])
const nums = input[1].split(' ').map(Number);
const operator = input[2].split(' ').map(Number);
let maxNum = -Infinity, minNum = Infinity;


const search = (num,idx,p,m,x,d) => {
  if (idx === n-1) {
    if (maxNum<num) maxNum = num;
    if (minNum>num) minNum = num;
    return
  }
  let nextNum = nums[idx+1]
  if (p) search(num+nextNum,idx+1,p-1,m,x,d);
  if (m) search(num-nextNum,idx+1,p,m-1,x,d);
  if (x) search(num*nextNum,idx+1,p,m,x-1,d);
  if (d) search(parseInt(num/nextNum),idx+1,p,m,x,d-1);
}
search(nums[0],0,operator[0],operator[1],operator[2],operator[3]);
maxNum = maxNum || 0;
minNum = minNum || 0;
console.log(maxNum);
console.log(minNum);