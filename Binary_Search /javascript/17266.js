const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.slice(0, 2).map(Number);
const arr = input[2].split(" ").map(Number);

const search = (N, M, arr) => {
  const firstDistance = arr[0];
  const lastDistance = N - arr[M - 1];
  let [left, right] = [-1, N];
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (checkHeight(mid, arr, firstDistance, lastDistance)) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};

const checkHeight = (height, arr, firstDistance, lastDistance) => {
  if (height < firstDistance || height < lastDistance) {
    return false;
  }
  for (let i = 1; i < arr.length; i++) {
    const distance = arr[i] - arr[i - 1];
    if (2 * height < distance) {
      return false;
    }
  }
  return true;
};

const answer = search(N, M, arr);
console.log(answer);
