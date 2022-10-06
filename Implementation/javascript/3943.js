console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((num) => {
      num = Number(num);
      let maxNum = num;
      while (num !== 1) {
        if (num % 2) {
          num *= 3;
          num += 1;
        } else {
          num /= 2;
        }
        maxNum = Math.max(num, maxNum);
      }
      return maxNum;
    })
    .join("\n")
);
