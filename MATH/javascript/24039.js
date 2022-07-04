const N = Number(require("fs").readFileSync("/dev/stdin").toString());
const MAX_RANGE = 104;
const getPrime = () => {
  const primeArr = new Array(MAX_RANGE).fill(true);
  primeArr[0] = false;
  primeArr[1] = false;
  for (let i = 2; i < Math.ceil(MAX_RANGE ** 0.5); i++) {
    for (let j = i * i; j < MAX_RANGE; j += i) {
      primeArr[j] = false;
    }
  }

  return primeArr.map((bool, idx) => bool && idx).filter((prime) => prime);
};

const binarySearch = (primeArr, targetNum) => {
  let [left, right] = [-1, primeArr.length - 1];
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    primeArr[mid] * primeArr[mid + 1] <= targetNum ? (left = mid) : (right = mid);
  }
  return right;
};

const solution = (N) => {
  const primeArr = getPrime();
  const leftIdx = binarySearch(primeArr, N);
  return primeArr[leftIdx] * primeArr[leftIdx + 1];
};

const answer = solution(N);
console.log(answer);
