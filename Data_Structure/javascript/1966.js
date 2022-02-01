class Node{
  constructor(item = null){
    this.item = item;
    this.next = null;
  }
}
class Queue {
  constructor(item = null){
    this.head = item;
    this.tail = item;
    this.size = 0;
  }
  enqueue(item){
    const newNode = new Node(item);
    if (this.head == null){ 
      this.head = newNode;
      this.head.next = this.tail;
    }
    else{
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  dequeue(){
    if (this.isEmpty()){return undefined};
    const popItem = this.head.item;
    this.head = this.head.next;
    this.size--;
    return popItem;
  }
  isEmpty(){
    if (this.size === 0 ){ return true;}
    return false
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1 ; i<input.length-1 ; i+=2){
  let [n,m] = input[i].split(' ').map(Number);
  const arr = input[i+1].split(' ').map(Number);
  let q = new Queue();
  let importance = new Array(10).fill(0);
  for (let i = 0 ; i<arr.length ; i++){
    q.enqueue(arr[i]);
  }
  for (let i = 0,checkQ = q.head ;i<q.size ;i++){
    importance[checkQ.item]++;
    checkQ = checkQ.next;
  }
  let idx = 9;
  let cnt = 0;
  while (n>0){
    while (importance[idx] === 0) idx--;
    importance[idx]--;
    while (!q.isEmpty() && q.head.item !== idx){
      q.enqueue(q.dequeue());
      m--;
      if (m===-1) m=n-1;
    }
    q.dequeue();
    n--;
    cnt ++;
    if (m-- === 0) break;
  }
  console.log(cnt);
}