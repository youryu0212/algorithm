// 상, 좌, 우, 하 순서로 먹는다.
// 처음 아기상어는 크기 2임
// 1, 2, 3, 4, 5, 6 : 물고기의 크기
// bfs로 상하좌우 탐색하는데, 물고기가 자기보다 크면 컨티뉴, 작거나 같으면 이동가능 ( 작으면 그자리로 먹고 그자리로 이동)
// 사이즈 = 상어크기가되면 사이즈 = 0 으로 초기화 상어크기 + 1

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const searchStartPoint = () => {
  const [row, col] = arr.reduce(
    (result, row, rowIdx) => {
      const colIdx = row.reduce((acc, num, colIdx) => {
        if (num === 9) {
          return colIdx;
        }
        return acc;
      }, undefined);
      if (colIdx !== undefined) {
        return [rowIdx, colIdx];
      }
      return result;
    },
    [0, 0]
  );
  return [row, col];
};

const checkRange = (r, c) => {
  if (r < 0 || c < 0 || r >= n || c >= n) {
    return false;
  }
  return true;
};

const checkSize = (shark, r, c) => {
  if (arr[r][c] > shark) {
    return false;
  }
  if (arr[r][c] === shark) {
    return "=";
  }
  if (arr[r][c] === 0) {
    return "0";
  }
  return true;
};

const bfs = () => {
  let q = [];
  let visited = Array.from(Array(n), () => new Array(n).fill(false));
  const moves = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  let answer = 0;
  let shark = 2;
  let eatCnt = 0;
  let [startR, startC] = searchStartPoint();
  let qIdx = 0;
  let nextArr = [];
  q.push([startR, startC, 0]);
  arr[startR][startC] = 0;
  visited[startR][startC] = true;
  while (q.length > qIdx) {
    let [r, c, timeCnt] = q[qIdx++];
    for (let i = 0; i < moves.length; i++) {
      let [nr, nc] = [r + moves[i][0], c + moves[i][1]];
      if (!checkRange(nr, nc)) {
        continue;
      }
      let sizeDiff = checkSize(shark, nr, nc);
      if (!sizeDiff) {
        continue;
      }
      if (visited[nr][nc]) {
        continue;
      }
      if (sizeDiff === "=") {
        visited[nr][nc] = true;
        q.push([nr, nc, timeCnt + 1]);
        continue;
      }
      if (sizeDiff === "0") {
        visited[nr][nc] = true;
        q.push([nr, nc, timeCnt + 1]);
        continue;
      }
      nextArr.push([nr, nc, timeCnt + 1]);
    }
    if (nextArr.length > 0 && (qIdx === q.length || timeCnt + 1 !== nextArr[0][2])) {
      nextArr.sort((a, b) => {
        if (a[2] !== b[2]) {
          return a[2] - b[2];
        }
        if (a[0] !== b[0]) {
          return a[0] - b[0];
        }
        return a[1] - b[1];
      });
      [nr, nc, timeCnt] = nextArr[0];
      visited = Array.from(Array(n), () => new Array(n).fill(false));
      visited[nr][nc] = true;
      nextArr = [];
      answer = timeCnt;
      q = [[nr, nc, timeCnt]];
      qIdx = 0;
      arr[nr][nc] = 0;
      eatCnt++;
      if (eatCnt === shark) {
        shark++;
        eatCnt = 0;
      }
    }
  }
  return answer;
};

const result = bfs();
console.log(result);
