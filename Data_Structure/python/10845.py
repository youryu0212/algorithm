import sys
input = sys.stdin.readline
class Node:
  def __init__(self,item=None):
    self.item = item
    self.next = None
class Queue:
  def __init__(self):
    self.head = None
    self.tail = None
    self.len = 0
    self.push;
    self.pop;
    self.size;
    self.empty;
    self.front;
    self.back;
  def push(self,item):
    new_node = Node(item)
    if self.head == None : self.head = new_node
    else: self.tail.next = new_node
    self.tail = new_node
    self.len+=1
  def pop(self):
    if self.len == 0 : 
        print(-1)
        return
    pop_item = self.head.item
    self.head = self.head.next
    if self.head == None: self.tail = None
    print(pop_item)
    self.len-=1
    return pop_item
  def size(self):
    print(self.len)
  def empty(self):
    if self.len == 0 : print(1)
    else: print(0)
  def front(self):
    if self.len == 0: 
        print(-1)
        return
    print(self.head.item)
  def back(self):
    if self.len == 0: 
        print(-1)
        return
    print(self.tail.item)
q = Queue()
n = int(input())
commands = {
    'push' : q.push,
    'pop' : q.pop,
    'size' : q.size,
    'empty' : q.empty,
    'front' : q.front,
    'back' : q.back
}
for _ in range(n):
    orders = list(input().rstrip().split(' '))
    if (len(orders)==2):
        commands['push'](orders[1])
    else:
        commands[orders[0]]()