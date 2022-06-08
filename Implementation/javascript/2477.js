const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const K = Number(input[0]);
const arr = input.slice(1, 7).map((row) => row.split(" ").map(Number));
const directionDictionary = [null, "E", "W", "S", "N"];

const figureInfo = arr.reduce(
  (direction, row, idx) => {
    const d = directionDictionary[row[0]];
    direction[d].cnt += 1;
    direction[d].idx.push(idx);
    direction[d].value.push(row[1]);
    return direction;
  },
  {
    E: { cnt: 0, idx: [], value: [] },
    W: { cnt: 0, idx: [], value: [] },
    N: { cnt: 0, idx: [], value: [] },
    S: { cnt: 0, idx: [], value: [] },
  }
);

const r = Math.max(...figureInfo.E.value, ...figureInfo.W.value);
const c = Math.max(...figureInfo.S.value, ...figureInfo.N.value);

const [a, b] = Object.values(figureInfo).filter((figure) => figure.cnt === 2);

const search = (a, b) => {
  const firstIdxDiff = Math.abs(a.idx[0] - b.idx[0]);
  const secIdxDiff = Math.abs(a.idx[1] - b.idx[1]);
  const midIdxDiff = Math.min(Math.abs(a.idx[0] - b.idx[1]), Math.abs(a.idx[1] - b.idx[0]));

  // abab 연속으로 나오면 두번째 세번째 값
  if (firstIdxDiff === secIdxDiff && firstIdxDiff === midIdxDiff && firstIdxDiff === 1) {
    return a.idx[0] < b.idx[0] ? [a.value[1], b.value[0]] : [a.value[0], b.value[1]];
  }

  // ab 두번 꺾이고 ab 형태면 첫번째 네번째 값
  if (firstIdxDiff === 1 && secIdxDiff === 1) {
    return a.idx[0] < b.idx[0] ? [a.value[0], b.value[1]] : [a.value[1], b.value[0]];
  }

  // a 두번 꺾이고 aba 형태면 세번째 네번째 값
  if (firstIdxDiff !== 1 && secIdxDiff === 1 && secIdxDiff === midIdxDiff) {
    return [a.value[1], b.value[1]];
  }

  // aba 두번꺾이고 b 형태면 첫번째 두번째 값
  if (firstIdxDiff === 1 && secIdxDiff !== 1 && firstIdxDiff === midIdxDiff) {
    return [a.value[0], b.value[0]];
  }
};
const [smallR, smallC] = search(a, b);
const area = r * c - smallR * smallC;
const answer = area * K;
console.log(answer);
