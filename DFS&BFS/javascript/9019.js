const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const cal = {
  D: (num) => (num * 2) % 10000,
  S: (num) => (num ? num - 1 : 9999),
  L: (num) => (num % 1000) * 10 + ~~(num / 1000),
  R: (num) => (num % 10) * 1000 + ~~(num / 10),
};
const orders = ["D", "S", "L", "R"];
let result = "";
for (let i = 1; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let q = [];
  let idx = 0;
  q.push([a, ""]);
  visited = new Array(10000);
  const search = (a, b, cur, visited) => {
    for (let i = 0; i < orders.length; i++) {
      let num = cal[orders[i]](a);
      if (num === b) {
        return cur + orders[i];
      }
      if (visited[num]) continue;
      visited[num] = true;
      q.push([num, cur + orders[i]]);
    }
  };
  while (q.length > idx) {
    let [num, cur] = q[idx++];

    let temp = search(num, b, cur, visited);
    if (temp) {
      result += temp + "\n";
      break;
    }
  }
}
console.log(result);
