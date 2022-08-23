const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const getRelation = (arr, N) => {
  const res = Array.from(Array(N + 1), () => []);
  for (const row of arr) {
    const [a, b] = row.split(" ").map(Number);
    res[a].push(b);
    res[b].push(a);
  }
  return res;
};

const arr = getRelation(input.slice(1), N, M);

const search = (arr) => {
  let answer = false;
  const dfs = (arr, visited, current, cnt) => {
    if (cnt === 5) {
      answer = true;
      return;
    }
    visited[current] = true;
    for (const nextNode of arr[current]) {
      if (visited[nextNode]) {
        continue;
      }
      dfs(arr, visited, nextNode, cnt + 1);
    }
    visited[current] = false;
  };

  for (let i = 0; i < arr.length; i++) {
    if (answer) {
      break;
    }
    const visited = new Array(arr.length).fill(false);
    dfs(arr, visited, i, 1);
  }
  return answer ? 1 : 0;
};

const answer = search(arr);
console.log(answer);
