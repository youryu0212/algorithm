const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const minusAndZero = [];
const plusNum = [];
let result = 0;
for (let i = 1; i < input.length - 1; i++) {
  if (input[i] <= 0) minusAndZero.push(Number(input[i]));
  else if (input[i] == 1) result++;
  else plusNum.push(Number(input[i]));
}
minusAndZero.sort((a, b) => b - a);
plusNum.sort((a, b) => a - b);

while (minusAndZero.length > 1) {
  result += minusAndZero.pop() * minusAndZero.pop();
}
if (minusAndZero.length > 0) result += minusAndZero.pop();

while (plusNum.length > 1) {
  result += plusNum.pop() * plusNum.pop();
}
if (plusNum.length > 0) result += plusNum.pop();

console.log(result);
