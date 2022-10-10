const [[n, m, k, x], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const route = Array.from(Array(n + 1), () => []);
input.forEach(([a, b]) => route[a].push(b));

const search = (route, k, x) => {
  const visited = new Array(n + 1).fill(false);
  const q = [];
  const answer = [];
  let idx = 0;
  q.push([x, 0]);
  visited[x] = true;

  while (q.length > idx) {
    const [node, cnt] = q[idx++];
    for (const nextNode of route[node]) {
      if (visited[nextNode]) {
        continue;
      }
      visited[nextNode] = true;
      if (cnt + 1 === k) {
        answer.push(nextNode);
        continue;
      }
      q.push([nextNode, cnt + 1]);
    }
  }
  return answer.length ? answer.sort((a, b) => a - b).join("\n") : -1;
};

const answer = search(route, k, x);
console.log(answer);
