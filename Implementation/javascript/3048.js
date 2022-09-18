const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = [
  ...[...input[1]].reverse().map((name) => {
    return { name, d: 0 };
  }),
  ...[...input[2]].map((name) => {
    return { name, d: 1 };
  }),
];

const T = Number(input[3]);

const solution = (arr, T) => {
  while (T--) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].d === 0 && arr[i].d !== arr[i + 1].d) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        i++;
      }
    }
  }
  return arr.map(({ name }) => name).join("");
};

const answer = solution(arr, T);
console.log(answer);
