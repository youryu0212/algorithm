console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((row) => row.split(" ").map(Number))
    .reduce(
      (acc, [cow, pos]) => {
        if (acc.arr[cow] !== -1 && acc.arr[cow] !== pos) {
          acc.arr[cow] = pos;
          return { ...acc, cnt: acc.cnt + 1 };
        }
        acc.arr[cow] = pos;
        return { ...acc };
      },
      { cnt: 0, arr: new Array(11).fill(-1) }
    ).cnt
);
