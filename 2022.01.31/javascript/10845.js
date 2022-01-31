class Node{
  constructor(item=null){
    this.item = item;
    this.next = null;
  }
}
class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.len = 0;
  }
  push(item){
    const newNode = new Node(item);
    if (this.head === null) { this.head = newNode}
    else this.tail.next = newNode;
    this.tail = newNode;
    this.len++;
  }
  pop(){
    if (this.empty()) return -1;
    const popItem = this.head.item;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    this.len--;
    return popItem;
  }
  empty(){
    if (this.len === 0) return 1;
    return 0;
  }
  size(){
    return this.len;
  }
  front(){
    if (this.empty()) return -1;
    return this.head.item;
  }
  back(){
    if (this.empty()) return -1;
    return this.tail.item;
  }
}
const q = new Queue();
const orders = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let order,arg,result;
let answer = "";
for (let i = 1 ; i<orders.length-1;i++){
  [order,arg] = orders[i].split(' ');
  result = q[order](arg);
  if (result || result===0) answer += result+"\n";
}
console.log(answer);