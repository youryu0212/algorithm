const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const solution = () => {
  const answer = [];
  for (let i = 0; i < input.length - 2; ) {
    const [n, m] = input[i].split(" ").map(Number);
    const endIdx = i + m;
    const arr = Array.from(Array(n + 1), () => new Array());
    const visited = new Array(n + 1).fill(false);

    for (i++; i <= endIdx; i++) {
      const [a, b] = input[i].split(" ").map(Number);
      arr[a].push(b);
      arr[b].push(a);
    }

    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (visited[j]) {
        continue;
      }
      if (dfs(-1, j, arr, visited)) {
        count++;
      }
    }
    answer.push(count);
  }
  return generateAnswer(answer);
};

const dfs = (prevNode, node, arr, visited) => {
  visited[node] = true;
  for (let nextNode of arr[node]) {
    if (nextNode === prevNode) {
      continue;
    }
    if (visited[nextNode]) {
      return false;
    }
    if (!dfs(node, nextNode, arr, visited)) {
      return false;
    }
  }
  return true;
};

const generateAnswer = (answer) => {
  return answer
    .map((cnt, idx) => {
      let template;
      if (cnt === 0) {
        template = "No trees.";
      } else {
        template = cnt > 1 ? `A forest of ${cnt} trees.` : "There is one tree.";
      }
      return `Case ${idx + 1}: ${template}`;
    })
    .join("\n");
};

const answer = solution();
console.log(answer);
