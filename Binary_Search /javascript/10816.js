const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const card = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const arr = input[3].split(' ').map(Number);
const bisectLeft = (left,right,target) => {
  if (left >=right) return left;
  const mid = left + Math.floor((right-left)/2);
  if (card[mid] >= target) {
    return bisectLeft(left,mid,target);
  }
  return bisectLeft(mid+1,right,target);
  
}
const bisectRight = (left,right,target) => {
  if (left >=right) return left-1;
  const mid = left + Math.floor((right-left)/2);
  if (card[mid] > target) {
    return bisectRight(left,mid,target);
  }
  return bisectRight(mid+1,right,target);
}


console.log(arr.reduce((acc,target)=>{
  const left =  bisectLeft(0,card.length,target);
  const right = bisectRight(0,card.length,target);
  acc.push(right-left+1);
  return acc;
},[]).join(" "));