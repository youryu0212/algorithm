from collections import deque
import sys
input = sys.stdin.readline
n,m = map(int,input().split())
graph = [list(map(int,input().rstrip())) for _ in range(n)]

def bfs(graph,r,c):
  q = deque()
  q.append((0,0))
  moves = [(-1,0),(0,1),(1,0),(0,-1)]
  while q:
    x,y = q.popleft()
    for move in moves:
      nx,ny = x+move[0],y+move[1]
      if nx>=r or ny>=c or nx<0 or ny<0: continue
      if graph[nx][ny] == 1:
        graph[nx][ny] = graph[x][y]+1
        q.append((nx,ny))
  return graph[r-1][c-1]

print(bfs(graph,n,m))