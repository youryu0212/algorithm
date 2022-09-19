from collections import deque
import sys

input = sys.stdin.readline

n = int(input())
data = list(map(int, input().split()))
queue = deque()
for i in range(1,n+1):
    queue.append(i)
result = []
x = 1
while True:
    if x > 0:
        idx = queue.popleft()
    else:
        idx = queue.pop()
    result.append(str(idx));
    x = data[idx-1]
    if not queue:
        break
    if x > 0:
        for _ in range(x-1):
            queue.append(queue.popleft())
    if x < 0:
        for _ in range(abs(x)-1):
            queue.appendleft(queue.pop())
print(" ".join(result))