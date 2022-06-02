from collections import deque
import sys
input = sys.stdin.readline
class Queue():
    def __init__(self):
        self.q = deque()
    def push(self,v):
        self.q.append(v)
    def pop(self):
        try:
            return self.q.popleft()
        except:
            return -1
    def size(self):
        return len(self.q)
    def empty(self):
        if not self.q:
            return 1
        else:
            return 0
    def front(self):
        try:
            return self.q[0]
        except:
            return -1
    def back(self):
        try:
            return self.q[-1]
        except:
            return -1
n = int(input())
queue = Queue()
for i in range(n):
    order = list(input().split())
    if len(order) == 2:
        getattr(queue,order[0])(order[1])
    else:
        print(getattr(queue,order[0])())