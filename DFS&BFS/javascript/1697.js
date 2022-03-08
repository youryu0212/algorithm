const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
const visited = new Array(100001);

class Node {
  constructor(item = null) {
    this.item = item;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(item) {
    const newNode = new Node(item);
    if (this.size === 0) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return -1;
    const popItem = this.head.item;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    this.size--;
    return popItem;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const q = new Queue();
q.enqueue([n, 0]);
let x, time;
while (q.size > 0) {
  [x, time] = q.dequeue();
  if (x === k) break;
  if (x < 0 || x > 100000) continue;
  if (visited[x]) continue;
  visited[x] = true;
  time++;
  q.enqueue([x - 1, time]);
  q.enqueue([x + 1, time]);
  q.enqueue([x * 2, time]);
}
console.log(time);
