const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [_, H] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

const search = (arr, H) => {
  const bottom = new Array(H + 1).fill(0);
  const top = new Array(H + 1).fill(0);
  for (const [idx, h] of arr.entries()) {
    if (idx % 2) {
      top[H + 1 - h] += 1;
    } else {
      bottom[h] += 1;
    }
  }
  for (let h = H - 1; h > 0; h--) {
    bottom[h] += bottom[h + 1];
  }
  for (let h = 2; h <= H; h++) {
    top[h] += top[h - 1];
  }
  const hurdle = bottom.map((value, idx) => value + top[idx]).slice(1);
  const minCnt = Math.min(...hurdle);
  return [minCnt, hurdle.filter((h) => h === minCnt).length].join(" ");
};

const answer = search(arr, H);
console.log(answer);
