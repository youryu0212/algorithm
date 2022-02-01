class Node{
  constructor(item=null){
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}
class Deque{
  constructor(){
    this.head = null;
    this.tail = null;
    this.len = 0;
  }
  append(item){
    const newNode = new Node(item);
    if (this.len===0) this.head=newNode;
    else {
      this.tail.next = newNode;
      this.tail.next.prev = this.tail;
    }
    this.tail = newNode;
    this.len++;
  }
  appendleft(item){
    const newNode = new Node(item);
    if (this.len === 0){
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      this.head.prev.next = this.head;
    }
    this.head = newNode;
    this.len++;
  }
  pop(){
    if (this.len===0) return -1
    const popItem = this.tail.item;
    this.tail = this.tail.prev;
    if (this.tail === null) this.head = null;
    this.len--;
    return popItem;
  }
  popleft(){
    if (this.len===0) return -1
    const popItem = this.head.item;
    this.head = this.head.next;
    if (this.head===null) this.tail = null;
    this.len--;
    return popItem;
  }
  isSize(){
    return this.len;
  }
  isEmpty(){
    if (this.len === 0) return 1;
    return 0;
  }
  front(){
    if (this.len ===0 ) return -1;
    return this.head.item;
  }
  back(){
    if (this.len ===0 ) return -1;
    return this.tail.item;
  }
}

const deque = new Deque();

const commands ={
  "push_front" : deque.appendleft,
  "push_back" : deque.append,
  "pop_front" : deque.popleft,
  "pop_back" : deque.pop,
  "size" : deque.isSize,
  "empty" : deque.isEmpty,
  "front" : deque.front,
  "back" : deque.back,
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let orders,result, answer="";
for (let i = 1 ; i<input.length-1 ; i++){
  orders = input[i].split(' ')
  if (orders.length === 2) result = commands[orders[0]].call(deque,(Number(orders[1])));
  else result = commands[orders[0]].call(deque,);
  if (result || result ===0) answer += result+'\n';
}
console.log(answer);