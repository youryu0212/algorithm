const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let stack = [],result = 0;
for (let i = 1 ; i<input.length-1 ; i++){
  if (input[i] === "0" ){
    if (stack.length !== 0) stack.pop();
    continue;
  }
  stack.push(Number(input[i]))
}

if (stack.length !== 0) result = stack.reduce((acc,cur)=>acc+cur);
console.log(result);