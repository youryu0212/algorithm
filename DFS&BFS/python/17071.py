from collections import deque
n,k = map(int,input().split())

def bfs (n) :
  q = deque()
  visited = {
    0:[1001 for _ in range(500001)],
    1:[1000 for _ in range(500001)]
  }
  
  q.append((n,0))
  while q:
    pos,time = q.popleft()
    
    if time > 1000:
      break

    if (pos > 500000 or pos < 0):
      continue
    if (visited[time%2][pos] != 1000 and visited[time%2][pos] != 1001):
      continue

    visited[time%2][pos] = time
    q.append((pos-1,time+1))
    q.append((pos+1,time+1))
    q.append((pos*2,time+1))
  return visited

def solution (n,k) :
  visited = bfs(n)
  time = 0

  while time <= 1000:
    if (k>500000):
      break
    if visited[time%2][k] <= time:
      return time
    time += 1
    k += time
  return -1
answer = solution(n,k)
print(answer)