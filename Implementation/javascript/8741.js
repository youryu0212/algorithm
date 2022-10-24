const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
console.log([...new Array(N).fill(1), ...new Array(N - 1).fill(0)].join(""));
