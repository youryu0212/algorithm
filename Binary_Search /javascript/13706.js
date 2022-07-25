const N = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());

const search = (N) => {
  let [left, right] = [BigInt(-1), N];
  while (left + BigInt(1) < right) {
    const mid = left + (right - left) / BigInt(2);
    if (mid * mid === N) {
      return String(mid);
    }
    if (mid * mid < N) {
      left = mid;
      continue;
    }
    right = mid;
  }
};

const answer = search(N);
console.log(answer);
