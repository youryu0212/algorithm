const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let result = 0;
const target = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);

const search = (num, idx) => {
  if (num === target) {
    result++;
  }
  for (let i = idx; i < arr.length; i++) {
    search(num + arr[i], i + 1);
  }
};
search(0 || null, 0);

console.log(result);
