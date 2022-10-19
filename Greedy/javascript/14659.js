console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")[1]
    .split(" ")
    .map(Number)
    .reduce(
      (answer, cur) =>
        cur > answer.last
          ? { ...answer, kill: 0, last: cur }
          : {
              ...answer,
              max: Math.max(answer.max, answer.kill + 1),
              kill: answer.kill + 1,
            },
      { max: 0, kill: 0, last: 0 }
    ).max
);
