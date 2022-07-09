const [[n, X], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

const accArr = arr.reduce((answer, num, idx) => {
  answer.push(answer[idx - 1] ? answer[idx - 1] + num : num);
  return answer;
}, []);
const rangeAccArray = accArr.map((num, idx) => (idx >= X ? num - accArr[idx - X] : num));
const maxNum = Math.max(...rangeAccArray);
const cnt = rangeAccArray.filter((num) => num === maxNum).length;

maxNum > 0 ? console.log([maxNum, cnt].join("\n")) : console.log("SAD");
