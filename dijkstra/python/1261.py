import sys
from heapq import heappush,heappop

input = sys.stdin.readline

m,n = map(int,input().split())
arr = [list(map(int,input().rstrip())) for _ in range(n)]
moves = [(-1,0),(0,1),(1,0),(0,-1)]
answer = 0

visited = [[False for _ in range(m)] for _ in range(n)]
heap = []
heappush(heap,[0,0,0])
visited[0][0] = True

def dijkstra():
  while heap:
    cnt,r,c = heappop(heap)
    if r == n-1 and c == m-1:
      return cnt
    for move in moves:
      nx,ny = r+move[0], c+move[1]
      if nx<0 or ny<0 or nx>=n or ny>=m:
        continue
      if visited[nx][ny]: continue
      visited[nx][ny] = True
      if arr[nx][ny] == 1:
        heappush(heap,(cnt+1,nx,ny))
      else:
        heappush(heap,(cnt,nx,ny))
print(dijkstra())