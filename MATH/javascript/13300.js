const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const rooms = Array.from(Array(7), () => {
  return { m: 0, w: 0 };
});
const arr = input
  .slice(1, -1)
  .map((row) => row.split(" ").map(Number))
  .reduce((answer, [gender, grade]) => {
    gender === 0 ? answer[grade].w++ : answer[grade].m++;
    return answer;
  }, rooms)
  .slice(1)
  .reduce((answer, grade) => answer + Math.ceil(grade.m / K) + Math.ceil(grade.w / K), 0);
console.log(arr);
