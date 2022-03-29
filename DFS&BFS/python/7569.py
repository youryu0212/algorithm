from collections import deque
import sys
input = sys.stdin.readline
m,n,h = map(int,input().split())
arr = [[] for _ in range(h)]
visited = [[[False for _ in range(m)] for _ in range(n)] for _ in range(h)]
for i in range(h):
  for _ in range(n):
    arr[i].append(list(map(int,input().split())))
def search(n,m,height):
  q = deque()
  for h in range(height):
    for r in range(n):
      for c in range(m):
        if arr[h][r][c] == 1:
          q.append((h,r,c,0))
          visited[h][r][c] = True
          continue
        if arr[h][r][c] == -1:
          visited[h][r][c] = True
  return q

def check_graph(cnt):
  for h in range(len(arr)):
    for r in range(len(arr[0])):
      for c in range(len(arr[0][0])):
        if visited[h][r][c] == 0:
          return -1
  return cnt

def bfs():
  q = search(n,m,h)
  moves = [(0,-1,0),(0,0,1),(0,1,0),(0,0,-1),(1,0,0),(-1,0,0)]
  result = 0
  while q:
    height,r,c,cnt = q.popleft()
    if cnt>result:
      result = cnt
    for move in moves:
      nh,nr,nc = height+move[0], r+move[1], c+move[2]
      if nh<0 or nr<0 or nc<0 or nh>=h or nr>=n or nc>=m: continue
      if visited[nh][nr][nc]: continue
      visited[nh][nr][nc] = True
      q.append((nh,nr,nc,cnt+1))
  return check_graph(result)
print(bfs())
