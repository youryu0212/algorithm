const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [n,c] = input[0].split(' ').map(Number)
const houses = input.slice(1,input.length-1).map(Number).sort((a,b)=>a-b);
let [minDis,maxDis] = [1,houses[houses.length-1]];

const binarySearch = (minDis,maxDis,target) => {
  if (minDis > maxDis) return 0
  const midDis = minDis + Math.floor((maxDis-minDis)/2);
  let cnt = 1;
  let pos = houses[0];
  let result = 0;
  houses.reduce((acc,cur) => {
    if (cur >= pos+midDis){
      pos = cur;
      cnt++;
    }
  })
  if (cnt >= target) {
    result = midDis;
    result = Math.max(result,binarySearch(midDis+1,maxDis,target));
  }
  else result = binarySearch(minDis,midDis-1,target);
  return result;
}
console.log(binarySearch(minDis,maxDis,c));