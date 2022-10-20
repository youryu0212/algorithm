console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")[1]
    .split(" ")
    .map(Number)
    .reduce(
      (acc, cur, idx) =>
        idx === 0
          ? { ...acc, start: cur, last: cur }
          : cur > acc.last
          ? { ...acc, last: cur, diff: Math.max(acc.diff, cur - acc.start) }
          : { ...acc, start: cur, last: cur },
      { start: 0, diff: 0, last: 0 }
    ).diff
);
