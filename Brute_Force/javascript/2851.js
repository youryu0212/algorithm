console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .reduce(
      (answer, num) => {
        if (answer.break) {
          return answer;
        }
        return Math.abs(answer.point + num - 100) <=
          Math.abs(answer.point - 100)
          ? { ...answer, point: answer.point + num }
          : { ...answer, break: true };
      },
      { point: 0, break: false }
    ).point
);
