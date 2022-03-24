from collections import deque
n,m = map(int,input().split())
visited = [[False for _ in range(n+1)] for _ in range(n+1)]
graph = [[] for _ in range(n+1)]
for _ in range(m):
  a,b = map(int,input().split())
  graph[a].append(b)
  graph[b].append(a)

def bfs(n,total):
  q = deque()
  q.append((n,0))
  visited[n][n] = True
  cnt = 1
  result = 0
  while q:
    idx, depth = q.popleft()
    for next_idx in graph[idx]:
      if visited[n][next_idx]: continue
      visited[n][next_idx] = True
      cnt+=1
      result += depth+1
      q.append((next_idx,depth+1))
  return result
result,idx = 10**18*9,0
for i in range(1,n+1):
  cnt =  bfs(i,n)
  if result > cnt:
    result = cnt
    idx = i
print(idx)