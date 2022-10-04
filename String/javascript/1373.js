const bin = [...require("fs").readFileSync("/dev/stdin").toString().trim()].map(
  Number
);
const answer = [];
let pow = 0;
let num = 0;
while (bin.length) {
  num += 2 ** pow++ * bin.pop();
  if (pow === 3) {
    answer.push(num);
    num = 0;
    pow = 0;
  }
}

if (num > 0) {
  answer.push(num);
}
console.log(answer.length ? answer.reverse().join("") : 0);
