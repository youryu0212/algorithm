const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const card = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const targetArr = input[3].split(' ').map(Number);

const search = (min,max,targetNum) => {
  if (min>=max) return 0
  const mid = min + Math.floor((max-min)/2);
  if (card[mid] === targetNum) return 1
  if (card[mid] > targetNum) return search(min,mid,targetNum);
  else return search(mid+1,max,targetNum)
}
console.log(targetArr.map((a)=>search(0,card.length,a)).join(" "));