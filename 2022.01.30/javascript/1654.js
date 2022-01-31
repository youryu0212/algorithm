const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [k,n] = input[0].split(' ');
let arr = [];
for (let i = 1 ; i<input.length-1 ; i++){
  arr.push(Number(input[i]));
}
let result = 0;
const search = (minNum,maxNum) => {
  if (minNum > maxNum){
    return;
  }
  let halfNum = minNum + Math.floor((maxNum-minNum)/2);
  const cnt = arr.reduce((cnt,cur) => {return cnt+Math.floor(cur/halfNum)},0)
  if (cnt>=n){
    result = halfNum;
    search(halfNum+1,maxNum)
  }
  if (cnt<n){
    search(minNum,halfNum-1);
  }
}
search(0,arr.reduce((prev,cur)=>Math.max(prev,cur)));
console.log(result);