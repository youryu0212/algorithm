const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const [start, end] = input.pop().split(" ").map(Number);
const arr = input.slice(2).map((row) => row.split(" ").map(Number));

const getMinDistanceNode = (arr, visited) => {
  const minNode = arr.reduce(
    (minNode, { cost }, idx) => {
      if (visited[idx]) {
        return minNode;
      }
      if (cost < minNode.cost) {
        return { idx, cost };
      }
      return minNode;
    },
    { idx: -1, cost: Infinity }
  ).idx;

  return minNode;
};

const solution = (n, arr, start, end) => {
  const route = Array.from(Array(n + 1), () => []);
  const costArr = Array.from(Array(n + 1), () => {
    return { cost: Infinity, course: [] };
  });
  costArr[start].cost = 0;

  const visited = new Array(n + 1).fill(false);

  arr.forEach(([start, end, cost]) => route[start].push([end, cost]));

  while (start !== end) {
    const { cost: currentCost, course } = costArr[start];
    visited[start] = true;
    route[start].forEach(([end, cost]) => {
      if (visited[end]) {
        return;
      }
      if (cost + currentCost < costArr[end].cost) {
        costArr[end] = { cost: cost + currentCost, course: [...course, start] };
      }
    });
    start = getMinDistanceNode(costArr, visited);
  }

  return costArr[end];
};

const { cost, course } = solution(n, arr, start, end);

console.log(cost);
console.log(course.length + 1);
console.log(course.join(" "), end);
