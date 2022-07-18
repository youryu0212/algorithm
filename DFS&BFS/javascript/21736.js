const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1, -1).map((row) => row.split(""));

const checkRange = (r, c) => {
  return !(r < 0 || c < 0 || r >= N || c >= M);
};

const searchStartPos = (arr) => {
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === "I") {
        return [r, c];
      }
    }
  }
};

const dfs = (r, c) => {
  const stack = [[r, c]];
  let answer = 0;
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (stack.length) {
    const [r, c] = stack.pop();
    for (const [dr, dc] of moves) {
      const [nr, nc] = [r + dr, c + dc];
      if (!checkRange(nr, nc)) {
        continue;
      }
      if (arr[nr][nc] === "I" || arr[nr][nc] === "X") {
        continue;
      }
      if (arr[nr][nc] === "P") {
        answer += 1;
      }
      arr[nr][nc] = "I";
      stack.push([nr, nc]);
    }
  }
  return answer;
};

const [r, c] = searchStartPos(arr);
const answer = dfs(r, c);
console.log(answer || "TT");
