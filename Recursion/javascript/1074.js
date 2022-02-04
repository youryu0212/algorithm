let [n,r,c] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

let halfIdx,valueDif;
let result = 0;
while (n>=1){
  halfIdx = Math.floor((2**n)/2);
  valueDif = 4**(n-1);
  if ( r<halfIdx ){
    if (c>=halfIdx){
      c -= halfIdx;
      result += valueDif;
    }
  }
  else{
    r -= halfIdx;

    if ( c<halfIdx){
      result += valueDif * 2;
    }
    else{
      c -= halfIdx;
      result += valueDif*3;
    }
  }
  n--;
}
console.log(result);