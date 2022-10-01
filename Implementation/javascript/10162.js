let T = require("fs").readFileSync("/dev/stdin").toString().trim();
const answer = [300, 60, 10]
  .map((t) => {
    const v = Math.floor(T / t);
    T %= t;
    return v;
  })
  .join(" ");
console.log(T ? -1 : answer);
