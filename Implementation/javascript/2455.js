console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map(Number))
    .reduce(
      ({ max, cur }, [out_, in_]) => {
        cur += in_ - out_;
        return { max: Math.max(max, cur), cur };
      },
      { max: 0, cur: 0 }
    ).max
);
