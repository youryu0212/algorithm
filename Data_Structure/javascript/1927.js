class Heapq {
  constructor() {
    this.data = [0];
    this.size = 0;
  }
  swap(a, b) {
    [this.data[b], this.data[a]] = [this.data[a], this.data[b]];
  }
  heappush(item) {
    this.idx = ++this.size;
    this.data.push(item);
    while (this.idx !== 1 && item <= this.data[Math.floor(this.idx / 2)]) {
      this.swap(Math.floor(this.idx / 2), this.idx);
      this.idx = Math.floor(this.idx / 2);
    }
  }
  heappop() {
    if (this.size === 0) return 0;
    this.swap(1, this.size);
    let parent = 1;
    while (true) {
      let child = parent * 2;
      if (child + 1 < this.size && this.data[child] > this.data[child + 1]) {
        child++;
      }
      if (child >= this.size || this.data[child] > this.data[parent]) {
        break;
      }
      this.swap(child, parent);
      parent = child;
    }
    if (this.size >= 1) {
      this.size--;
    }
    return this.data.pop();
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let result = "";
const heap = new Heapq();
for (let i = 1; i < input.length - 1; i++) {
  input[i] = Number(input[i]);
  if (input[i] === 0) result += heap.heappop() + "\n";
  else heap.heappush(input[i]);
}
console.log(result);
