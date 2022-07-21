const [[N, M], ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const distance = new Array(N + 1).fill(Infinity);

const bf = () => {
  distance[1] = 0;
  for (let i = 0; i <= N; i++) {
    for (const [curNode, nextNode, cost] of arr) {
      if (distance[curNode] !== Infinity && distance[nextNode] > distance[curNode] + cost) {
        distance[nextNode] = distance[curNode] + cost;
        if (i === N) {
          return true;
        }
      }
    }
  }
  return false;
};

const print = () => {
  const answer = [];
  if (bf()) {
    answer.push(-1);
  } else {
    for (const dis of distance.slice(2)) {
      answer.push(dis !== Infinity ? dis : -1);
    }
  }
  console.log(answer.join("\n"));
};
print();
