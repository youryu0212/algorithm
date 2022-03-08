from collections import deque
n,k = map(int,input().split())

q = deque()
q.append([n,0])
visited = [False for _ in range(100000)]
while q:
  x,time = q.popleft()
  if (x == k):
    break
  if x<0 or x>100000: continue
  if visited[x]: continue
  time += 1
  visited[x] = True
  q.append([x-1,time])
  q.append([x+1,time])
  q.append([x*2,time])
print(time)