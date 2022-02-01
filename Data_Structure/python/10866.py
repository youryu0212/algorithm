import sys
from collections import deque
input = sys.stdin.readline

my_deque = deque()

def is_size(deq):
  return len(deq)

def is_empty(deq):
  if len(deq) == 0: return 1
  return 0
def front(deq):
  if len(deq)==0 : return -1
  return deq[0]
def back(deq):
  if len(deq)==0 : return -1
  return deq[-1]
def pop(deq):
  if (len(deq)==0) : return -1
  return deq.pop()
def popleft(deq):
  if (len(deq)==0) : return -1
  return deq.popleft()


commands = {
  "push_front" : my_deque.appendleft,
  "push_back" : my_deque.append,
  "pop_front" : popleft,
  "pop_back" : pop,
  "size" : is_size,
  "empty" : is_empty,
  "front" : front,
  "back" : back,
}
n = int(input())
answer = ""
for _ in range(n):
  orders = input().rstrip().split(' ')
  if (len(orders) == 2) : result = commands[orders[0]](orders[1])
  else: result = commands[orders[0]](my_deque)
  if result or result == 0:
    answer += str(result) +"\n"
print(answer)
