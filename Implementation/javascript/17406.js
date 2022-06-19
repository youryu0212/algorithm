const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);

const arr = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));
const queries = input.slice(n + 1, n + k + 1).map((row) => row.split(" ").map(Number));

const rotateArray = (arr, sr, sc, er, ec) => {
  const width = ec - sc;
  const height = er - sr;
  if (width <= 0 || height <= 0) {
    return;
  }
  let d = 0;
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let [r, c] = [sr, sc];
  let nextValue = arr[r][c];
  for (let [dr, dc] of moves) {
    let cnt = d % 2 === 0 ? width : height;
    d++;
    while (cnt > 0) {
      const [nr, nc] = [r + dr, c + dc];
      [arr[nr][nc], nextValue] = [nextValue, arr[nr][nc]];
      [r, c] = [nr, nc];
      cnt--;
    }
  }
  rotateArray(arr, sr + 1, sc + 1, er - 1, ec - 1);
};

const getPosition = (r, c, s) => {
  const [sr, er] = [r - s - 1, r + s - 1];
  const [sc, ec] = [c - s - 1, c + s - 1];
  return [sr, sc, er, ec];
};

const getOrder = (n) => {
  const answer = [];
  const generate = (result, depth, visited) => {
    if (depth === n) {
      answer.push(result);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited.has(i)) {
        continue;
      }
      generate([...result, i], depth + 1, new Set([...visited, i]));
    }
  };
  generate([], 0, new Set());
  return answer;
};

const solution = (arr, queries) => {
  const orderArray = getOrder(queries.length);
  let answer = Infinity;
  for (let orders of orderArray) {
    const targetArr = deepCopy(arr);
    orders.forEach((order) => {
      const [r, c, s] = queries[order];
      const [sr, sc, er, ec] = getPosition(r, c, s);
      rotateArray(targetArr, sr, sc, er, ec);
    });
    const value = getArrayValue(targetArr);
    answer = Math.min(answer, value);
  }
  return answer;
};

const deepCopy = (arr) => {
  return arr.reduce((newArr, row) => {
    newArr.push([...row]);
    return newArr;
  }, []);
};

const getArrayValue = (arr) => {
  return arr.reduce((value, row) => {
    const total = row.reduce((total, value) => total + value, 0);
    return Math.min(value, total);
  }, Infinity);
};

const answer = solution(arr, queries);
console.log(answer);
