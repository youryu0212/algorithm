class Node{
  constructor (item=null){
    this.item = item;
    this.next = null;
  }
}
class Queue{
  constructor (){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(item){
    const newNode = new Node(item);
    if (this.head===null) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  dequeue(){
    if (this.isEmpty()) return null;
    const popItem = this.head.item;
    this.head = this.head.next;
    this.size--;
    return popItem;
  }
  isEmpty(){
    if (this.size===0) return true;
    return false;
  }
  print(){
    let checkNode = this.head;
    while (checkNode !== null){
      console.log(checkNode.item);
      checkNode = checkNode.next;
    }
  }
}

const [n,k] = require("fs").readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);
const q = new Queue();
for (let i = 1 ; i<=n ; i++){
  q.enqueue(i);
}

let cnt = 0;
let result = [];
let popItem;
while (q.size !== 0){
  cnt++;
  popItem = q.dequeue();
  if (cnt === k) {
    result.push(popItem);
    cnt = 0;
  }
  else q.enqueue(popItem);
  
}
console.log(`<${result.join(", ")}>`)