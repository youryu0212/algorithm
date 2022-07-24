const n = BigInt(require("fs").readFileSync("/dev/stdin"));

const search = (n) => {
  let [left, right] = [BigInt(-1), n];
  while (left + BigInt(1) < right) {
    const mid = left + (right - left) / BigInt(2);
    if (mid * mid >= n) {
      right = mid;
      continue;
    }
    left = mid;
  }
  return String(right);
};
const answer = search(n);
console.log(answer);
