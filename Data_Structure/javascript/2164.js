const n = Number(require('fs').readFileSync('/dev/stdin'));
class Node{
  constructor (data=0){
    this.item = data;
    this.next = null;
  }
}
class Queue{
  constructor (){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(item) {
    const node = new Node(item);
    if (this.head === null){
      this.head = node;
      this.head.next = this.tail;
    }else this.tail.next = node;
    this.tail = node;
    this.size += 1
  }
  dequeue(){
    const popItem = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return popItem;
  }
}
let queue = new Queue()
for (let i = 1 ; i<=n ; i++){
  queue.enqueue(i);
}

while (queue.size>1){
  queue.dequeue();
  queue.enqueue(queue.dequeue().item);
}
console.log(queue.head.item);