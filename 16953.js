const [a, b] = require("fs").readFileSync("/dev/stdin").toString().split("\n")[0].split(" ").map(Number);

const bfs = (a, b) => {
  const q = [];
  let idx = 0;
  q.push([a, 1]);
  let num, cnt;
  while (q.length > idx) {
    [num, cnt] = q[idx++];
    if (num === b) {
      return cnt;
    }
    if (num > b) {
      continue;
    }
    q.push([num * 10 + 1, cnt + 1]);
    q.push([num * 2, cnt + 1]);
  }
  return -1;
};

const answer = bfs(a, b);
console.log(answer);
