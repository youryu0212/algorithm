const s = Number(require('fs').readFileSync('/dev/stdin'));

const isEmptyArray = (arr) => {
  if (Array.isArray(arr) && arr.length === 0){
    return true;
  }
  return false;
}

let costArr = new Array(s+1).fill();
for (let i = 0 ; i<=s ; i++){
  costArr[i] = new Array(s+10).fill(false);
}
costArr[1][0] = 0;
let queue = [];
let e,c;
queue.push([1,0]);

while (!isEmptyArray(queue)){
  [e,c] = queue.shift()
  if (! costArr[e][e]) {
    costArr[e][e] = costArr[e][c] + 1;
    queue.push([e,e]);
  }
  if (e+c <= s && !costArr[e+c][c]){
    costArr[e+c][c] = costArr[e][c] + 1;
    queue.push([e+c,c]);
    if (e+c === s) {
      console.log(costArr[e+c][c]);
      break;
    }
  }
  if (e-1 > 1 && !costArr[e-1][c]){
    costArr[e-1][c] = costArr[e][c] + 1;
    queue.push([e-1,c]);
    if (e-1 === s) {
      console.log(costArr[e-1][c]);
      break;
    }
  }
}