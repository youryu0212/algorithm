const [[N], [M], ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const route = Array.from(Array(N + 1), () => []);
const costArr = new Array(N + 1).fill(Infinity);
const visited = new Array(N + 1).fill(false);
const [startNode, finishNode] = arr.pop();
costArr[startNode] = 0;

for (const [startNode, destination, cost] of arr) {
  route[startNode].push([destination, cost]);
}

const getMinNode = (arr, visited) => {
  return arr.reduce(
    (current, cost, idx) => {
      if (visited[idx]) {
        return current;
      }
      if (current.cost > cost) {
        return { idx, cost };
      }
      return current;
    },
    { idx: -1, cost: Infinity }
  ).idx;
};

const solution = (route, costArr, visited, startNode, finishNode) => {
  while (startNode !== finishNode) {
    visited[startNode] = true;
    const currentCost = costArr[startNode];

    for (const [destination, cost] of route[startNode]) {
      costArr[destination] = Math.min(costArr[destination], cost + currentCost);
    }
    startNode = getMinNode(costArr, visited);
  }
  return costArr[finishNode];
};

const answer = solution(route, costArr, visited, startNode, finishNode);
console.log(answer);
