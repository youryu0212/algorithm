const n = Number(require('fs').readFileSync('/dev/stdin').toString().split('\n')[0]);
let result;
let hanoi = (n,start,end,wayPoint,result) => {
  if (n===0) {
    return result;
  }
  result += hanoi(n-1,start,wayPoint,end,"");
  result += `${start} ${end}\n`;
  result += hanoi(n-1,wayPoint,end,start,"");
  return result;
}
console.log(2**n-1);
result = hanoi(n,1,3,2,"");
console.log(result);