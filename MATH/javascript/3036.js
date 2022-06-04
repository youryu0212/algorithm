const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const arr = input[1].split(' ').map(Number);
const num = arr[0];

const getGCD = (a,b) =>{
  if (b===0){
    return a;
  }
  return getGCD(b,a%b);
}

const calRotation = (a,b)=>{
  const gcd = getGCD(a,b);
  return `${a/gcd}/${b/gcd}`;
}

const answer = [];
for (let i = 1; i<arr.length ; i++){
  const rotationCnt = calRotation(num,arr[i]);
  answer.push(rotationCnt);
}
console.log(answer.join("\n"));