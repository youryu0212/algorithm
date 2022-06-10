const S = require("fs").readFileSync("/dev/stdin").toString().split("\n")[0].split("");

const cntArr = S.reduce(
  (cntArr, num, idx) => {
    if (num !== S[idx - 1]) {
      cntArr[num] += 1;
    }
    return cntArr;
  },
  [0, 0]
);

const answer = Math.min(...cntArr);
console.log(answer);
