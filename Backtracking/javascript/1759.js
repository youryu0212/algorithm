const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [l, c] = input[0].split(" ").map(Number);
const alpha = input[1].split(" ").sort();
const moSet = new Set(["a", "e", "i", "o", "u"]);
let answer = "";
const search = (s, idx, moCnt, jaCnt, len) => {
  if (len === l) {
    if (moCnt >= 1 && jaCnt >= 2) {
      answer += s + "\n";
    }
    return;
  }
  for (let i = idx; i < alpha.length; i++) {
    if (moSet.has(alpha[i])) {
      search(s + alpha[i], i + 1, moCnt + 1, jaCnt, len + 1);
      continue;
    }
    search(s + alpha[i], i + 1, moCnt, jaCnt + 1, len + 1);
  }
};

search("", 0, 0, 0, 0);
console.log(answer);
