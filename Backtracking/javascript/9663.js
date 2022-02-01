const n = Number(require('fs').readFileSync('/dev/stdin'));
let cntArr = new Array(n).fill(false);
let checkSet = new Set();
let result = 0;
let checkBool;
const solution = (r,c) => {
  if (r === n-1){
    console.log(checkSet);
    result++;
  }
  let element = [r,c];
  cntArr[c] = true;
  checkSet.add(element);
  for (let c = 0 ; c<n ; c++){
    checkBool = false;
    if (cntArr[c]) continue;
    for (let [x,y] of checkSet){
      if (Math.abs(r+1-x) === Math.abs(y-c)){
        checkBool = true;
        break;
      }
    }
    if (checkBool) continue
    solution(r+1,c);
  }
  cntArr[c] = false;
  checkSet.delete(element);
}
for (let i = 0 ; i<n ; i++){
  solution(0,i);
}
console.log(result);