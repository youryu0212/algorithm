const [[T], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const bf = (N, route) => {
  const distance = new Array(N + 1).fill(0);
  distance[1] = 0;
  for (let i = 1; i <= N; i++) {
    for (const [S, E, T] of route) {
      if (distance[E] > distance[S] + T) {
        distance[E] = distance[S] + T;
        if (i === N) {
          return true;
        }
      }
    }
  }
  return false;
};

const solution = (T, arr) => {
  const answer = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const [N, M, W] = arr[i];
    const route = [];
    for (let j = i + 1; j <= i + M; j++) {
      const [S, E, T] = arr[j];
      route.push([S, E, T]);
      route.push([E, S, T]);
    }
    i += M;

    for (let j = i + 1; j <= i + W; j++) {
      const [S, E, T] = arr[j];
      route.push([S, E, -T]);
    }
    i += W;
    if (bf(N, route)) {
      answer.push("YES");
      continue;
    }
    answer.push("NO");
  }
  return answer.join("\n");
};

const answer = solution(T, input);
console.log(answer);
