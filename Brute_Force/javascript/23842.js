const N = Number(require("fs").readFileSync("/dev/stdin").toString());
const arr = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6, 6];

const solution = (N, arr) => {
  let flag = false;
  const search = (current) => {
    if (flag) {
      return;
    }
    if (current.length === 4) {
      const result = Number(`${current[0]}${current[1]}`) + Number(`${current[2]}${current[3]}`);
      const cnt =
        current.reduce((cnt, cur) => cnt + arr[cur], 0) + 4 + arr[result % 10] + arr[Math.floor(result / 10)];
      if (cnt === N) {
        printAnswer(current, result);
        flag = true;
      }
      return;
    }
    for (let i = 0; i < 10; i++) {
      if (flag) {
        return;
      }
      search([...current, i]);
    }
  };
  search([]);
  if (flag) {
    return;
  }
  console.log("impossible");
};

const printAnswer = (arr, result) => {
  console.log(`${arr[0]}${arr[1]}+${arr[2]}${arr[3]}=${result < 10 ? "0" : ""}${result}`);
};
solution(N, arr);
