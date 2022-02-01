let leftIdx,rightIdx;
const bisectLeft = (arr,num,minIdx,maxIdx) => {
  if (minIdx > maxIdx) return -1;
  const halfIdx = minIdx + Math.floor((maxIdx-minIdx)/2);
  if (arr[halfIdx]>=num){
    if (arr[halfIdx]===num) leftIdx = halfIdx;
    bisectLeft(arr,num,minIdx,halfIdx-1);
  }
  else{
    bisectLeft(arr,num,halfIdx+1,maxIdx);
  }
}
const bisectRight = (arr,num,minIdx,maxIdx) => {
  if (minIdx > maxIdx) return -1;
  const halfIdx = minIdx + Math.floor((maxIdx-minIdx)/2);
  if (arr[halfIdx]>num){
    bisectRight(arr,num,minIdx,halfIdx-1);
  }
  else{
    if (arr[halfIdx]===num) rightIdx = halfIdx;
    bisectRight(arr,num,halfIdx+1,maxIdx);
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const arr = input[3].split(' ').map(Number)

const result = arr.reduce((acc,cur)=>{
  leftIdx = -1 ,rightIdx = -1;
  bisectLeft(nums,cur,0,n-1);
  bisectRight(nums,cur,0,n-1);
  if (leftIdx!==-1 && rightIdx!==-1) acc.push(rightIdx-leftIdx+1);
  else acc.push(0);
  return acc;
},[]);

console.log(result.join(" "));