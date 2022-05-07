const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [];
const TARGET_COUNT = 3;
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const getEmptyPosition = () => {
  const result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

const getVirusPoint = () => {
  const result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

const checkRange = (r, c) => {
  if (r < 0 || c < 0 || r >= n || c >= m) {
    return false;
  }
  return true;
};

const deepCopy = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

const buildWall = (wallPosition) => {
  const newArr = arr.map((row) => row.map((col) => col));
  wallPosition.forEach(([r, c]) => {
    newArr[r][c] = 1;
  });
  return newArr;
};

const bfs = (wallPosition, virusPoint) => {
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  const q = [];
  let idx = 0;
  const newArr = buildWall(wallPosition);
  for (let i = 0; i < virusPoint.length; i++) {
    const [r, c] = virusPoint[i];
    q.push([r, c]);
    visited[r][c] = true;
  }

  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  while (q.length > idx) {
    const [r, c] = q[idx++];
    for (let [dr, dc] of moves) {
      const [nr, nc] = [r + dr, c + dc];
      if (!checkRange(nr, nc)) {
        continue;
      }
      if (newArr[nr][nc] === 1) {
        continue;
      }
      if (visited[nr][nc]) {
        continue;
      }
      visited[nr][nc] = true;
      newArr[nr][nc] = 2;
      q.push([nr, nc]);
    }
  }
  return countSafeArea(newArr);
};

const countSafeArea = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
};

const solution = () => {
  let answer = 0;
  const virusPoint = getVirusPoint();
  const emptyPosition = getEmptyPosition();
  const search = (position, idxArr, cnt, startIdx, vriusPoint) => {
    if (cnt === TARGET_COUNT) {
      const result = bfs(idxArr, vriusPoint);
      answer = Math.max(result, answer);
      return;
    }
    for (let i = startIdx; i < position.length; i++) {
      search(position, idxArr.concat([position[i]]), cnt + 1, i + 1, vriusPoint);
    }
  };
  search(emptyPosition, [], 0, 0, virusPoint);
  return answer;
};
const answer = solution();
console.log(answer);
