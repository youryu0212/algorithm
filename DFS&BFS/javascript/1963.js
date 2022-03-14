const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const visited = new Array(10000);

for (let i = 2; i <= Math.floor(9999 ** 0.5) + 1; i++) {
  let j = 2;
  while (i * j <= 9999) {
    visited[i * j++] = true;
  }
}

sosoo = new Set();
for (let i = 1000; i <= 9999; i++) {
  if (!visited[i]) sosoo.add(i);
}

for (let i = 1; i < input.length - 1; i++) {
  let idx = 0;
  let [a, b] = input[i].split(" ").map(Number);
  if (a === b) {
    console.log(0);
    continue;
  }
  const q = [];
  let result = "Impossible";
  const visited = new Set();
  visited.add(a);
  q.push([a, 0]);
  while (q.length > idx) {
    let [num, cnt] = q[idx++];
    for (let i = 0; i < 10; i++) {
      const arr = [];
      arr.push(~~(num / 10) * 10 + i);
      arr.push(~~(num / 100) * 100 + i * 10 + (num % 10));
      arr.push(~~(num / 1000) * 1000 + i * 100 + (num % 100));
      arr.push((num % 1000) + i * 1000);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === b) {
          result = cnt + 1;
          break;
        }
        if (!sosoo.has(arr[i])) continue;
        if (visited.has(arr[i])) continue;
        visited.add(arr[i]);
        q.push([arr[i], cnt + 1]);
      }
      if (result !== "Impossible") break;
    }
    if (result !== "Impossible") break;
  }
  console.log(result);
}
