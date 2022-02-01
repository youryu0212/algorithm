import sys

class Stack():
  def __init__(self) :
    self.stack = []
  def push(self,item):
    self.stack.append(item)
  def pop(self):
    if len(self.stack) == 0 : return -1
    return self.stack.pop()
  def size(self):
    return len(self.stack)
  def empty(self):
    if self.size() == 0 : return 1
    return 0
  def top(self):
    if self.empty() : return -1
    return self.stack[-1]

stack = Stack()

commands ={
  "push":stack.push,
  "pop":stack.pop,
  "size":stack.size,
  "empty":stack.empty,
  "top":stack.top,
  }
answer = ""
for _ in range(int(input())):
  orders = sys.stdin.readline().rstrip().split(' ')
  if (len(orders) == 2):
    result = commands[orders[0]](int(orders[1]))
  else:
    result = commands[orders[0]]()
  if result or result == 0:
    answer += str(result)+"\n"
sys.stdout.write(answer)