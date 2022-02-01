const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const search = (minNum,maxNum) => {
  if (minNum > maxNum) return;
  let halfNum = minNum + Math.floor((maxNum-minNum)/2);
  let dif, height = 0;

  for (let i = 0 ;i<nums.length ; i++){
    dif = nums[i]-halfNum;
    if (dif>0) height+=dif;
  }
  if (height >= M){
    result = halfNum;
    search(halfNum+1,maxNum);
  }
  else{
    search(minNum,halfNum-1);
  }
}


const [N,M] = input[0].split(' ');
const nums = input[1].split(' ').map(Number);
let result = 0;
const maxHeight = nums.reduce((prev,cur)=>{
  if(prev<cur) prev = cur;
  return prev;
},0)
search(0,maxHeight);
console.log(result);