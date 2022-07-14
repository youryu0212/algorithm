const N = Number(require("fs").readFileSync("/dev/stdin"));

let [left, right] = [1, 1];
let total = left;
let cnt = 1;

while (left !== N) {
  if (total === N) {
    cnt += 1;
    total -= left++;
    total += ++right;
    continue;
  }
  if (total < N) {
    total += ++right;
    continue;
  }
  if (total > N) {
    total -= left++;
    continue;
  }
}
console.log(cnt);
