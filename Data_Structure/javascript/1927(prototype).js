const Heapq = function () {
  this.data = [null];
  this.size = 0;
};
Heapq.prototype.swap = function (a, b) {
  [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
};
Heapq.prototype.heappush = function (item) {
  this.data.push(item);
  let idx = ++this.size;
  let parentIdx = ~~(idx / 2);
  while (parentIdx >= 1) {
    if (this.data[idx] < this.data[parentIdx]) {
      this.swap(idx, parentIdx);
      [idx, parentIdx] = [parentIdx, ~~(parentIdx / 2)];
      continue;
    }
    break;
  }
};
Heapq.prototype.heappop = function () {
  if (this.size === 0) return 0;
  this.swap(1, this.size);
  let parent = 1;
  while (true) {
    let child = parent * 2;
    if (child + 1 < this.size && this.data[child + 1] < this.data[child]) {
      child += 1;
    }
    if (child < this.size && this.data[child] < this.data[parent]) {
      this.swap(child, parent);
      parent = child;
      continue;
    }
    this.size--;
    return this.data.pop();
  }
};

const heap = new Heapq();
let result = "";
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
for (let i = 1; i < input.length - 1; i++) {
  const order = Number(input[i]);
  if (!order) result += heap.heappop() + "\n";
  else heap.heappush(order);
}

console.log(result);
