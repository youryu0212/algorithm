const getPrime = () => {
  const arr = new Array(1003002).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i < Math.floor(1003002 ** 0.5); i++) {
    for (let j = i * i; j <= 1003002; j += i) {
      arr[j] = false;
    }
  }

  return arr.map((bool, idx) => bool && idx).filter((prime) => prime);
};

const reverse = (s) => {
  const newS = [];
  for (let i = s.length - 1; i >= 0; i--) {
    newS.push(s[i]);
  }
  return newS.join("");
};

const getPalindrome = (num) => {
  numS = String(num);
  return numS === reverse(numS);
};

const filterRange = (arr, min) => {
  return arr.filter((num) => num >= min);
};

const solution = (N) => {
  const primeArr = filterRange(getPrime(), N);

  for (const prime of primeArr) {
    if (!getPalindrome(prime)) {
      continue;
    }
    return prime;
  }
};

const N = Number(require("fs").readFileSync("/dev/stdin"));

console.log(solution(N));
