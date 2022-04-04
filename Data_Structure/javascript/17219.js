const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const dic = new Map();
let id_, password_;
let i = 1;
for (; i <= n; i++) {
  [id_, password_] = input[i].split(" ");
  dic.set(id_, password_);
}
let result = "";
for (; i < input.length - 1; i++) {
  id_ = input[i];
  result += dic.get(id_) + "\n";
}
console.log(result);
