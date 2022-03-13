class Heapq {
  constructor() {
    this.data = [null];
    this.size = 0;
  }
  swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
  heappush(item) {
    let childIdx = ++this.size;
    let parentIdx = ~~(childIdx / 2);
    this.data.push(item);
    while (parentIdx >= 1) {
      if (this.data[parentIdx] < this.data[childIdx]) {
        this.swap(parentIdx, childIdx);
        [parentIdx, childIdx] = [~~(parentIdx / 2), parentIdx];
        continue;
      }
      return;
    }
  }
  heappop() {
    if (this.size === 0) return 0;
    let parentIdx = 1;
    this.swap(parentIdx, this.size);
    while (true) {
      let childIdx = parentIdx * 2;
      if (childIdx + 1 < this.size && this.data[childIdx] < this.data[childIdx + 1]) {
        childIdx += 1;
      }
      if (childIdx < this.size && this.data[parentIdx] < this.data[childIdx]) {
        this.swap(childIdx, parentIdx);
        parentIdx = childIdx;
        continue;
      }
      this.size--;
      return this.data.pop();
    }
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const heap = new Heapq();
let result = "";
for (let i = 1; i < input.length - 1; i++) {
  const order = Number(input[i]);
  if (order === 0) result += `${heap.heappop()}\n`;
  else heap.heappush(order);
}
console.log(result);
