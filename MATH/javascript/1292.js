const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const createArr = (maxLen) => {
  const arr = [];
  let cnt = 0;
  let num = 1;
  while (true) {
    for (let i = 0; i < num; i++) {
      if (cnt >= maxLen) {
        return arr;
      }
      arr.push(num);
      cnt++;
    }
    num++;
  }
};

const solution = (a, b) => {
  const arr = createArr(1000);
  let sum = 0;
  for (let i = a - 1; i < b; i++) {
    sum += arr[i];
  }
  return sum;
};

const answer = solution(a, b);
console.log(answer);
