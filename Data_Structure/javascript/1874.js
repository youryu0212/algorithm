const nums = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let stack = [];
let targetIdx = 1;
let result = [];
for (let i = 1 ; i <= nums[0] ; i++){
  stack.push(i);
  result.push("+");
  while (stack.length> 0 && stack[stack.length-1] === nums[targetIdx]) {
    stack.pop();
    result.push("-");
    targetIdx++;
  }
}
if (stack.length>0) result = "NO";
else result = result.join("\n");
console.log(result);