const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);

const route = input.slice(1, -1).reduce(
  (route, row) => {
    const [a, b, c] = row.split(" ").map(Number);
    route[a].push([b, c]);
    route[b].push([a, c]);
    return route;
  },
  Array.from(Array(N + 1), () => [])
);

const solution = (route) => {
  const visited = new Array(N + 1).fill(false);
  const stack = [[1, 0]];
  let answer = 0;
  while (stack.length) {
    const [node, cost] = stack.pop();
    for (let [nextNode, nextCost] of route[node]) {
      if (visited[nextNode]) {
        continue;
      }
      visited[nextNode] = true;
      stack.push([nextNode, cost + nextCost]);
    }
    answer = Math.max(answer, cost);
  }
  return answer;
};

const answer = solution(route);
console.log(answer);
