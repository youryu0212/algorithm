from collections import deque
import sys
input = sys.stdin.readline
c,r = map(int,input().split())
graph = [list(map(int,input().split())) for _ in range(r)]

def bfs(graph,r,c):
  moves = [[-1,0],[0,1],[1,0],[0,-1]]
  cnt = 0
  q = deque()
  for i in range(r):
    for j in range(c):
      if (graph[i][j] == 1):
        q.append((i,j,0))
  while q:
    x,y,cnt = q.popleft()
    for move in moves:
      nx,ny = x+move[0],y+move[1]
      if nx>=r or ny>=c or nx<0 or ny<0: continue
      if graph[nx][ny] == 0:
        q.append((nx,ny,cnt+1))
        graph[nx][ny] = 1
  for i in range(r):
    if 0 in graph[i]:
      cnt = -1
      break
  return cnt
print(bfs(graph,r,c))