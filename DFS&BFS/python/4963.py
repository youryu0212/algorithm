import sys
sys.setrecursionlimit(10**6)
moves = [(-1,-1),(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1)]
def range_check(r,c):
  if ( r<0 or c<0 or r>=h or c>=w): return False
  return True

def dfs(r,c):
  if graph[r][c] == 0: return 0
  graph[r][c] = 0
  for move in moves:
    nx,ny = r+move[0],c+move[1]
    if range_check(nx,ny) and graph[nx][ny] == 1:
      dfs(nx,ny)
  return 1

while True:
  w,h = map(int,input().split())
  result = 0
  if w==h==0: break
  graph = [list(map(int,input().split())) for _ in range(h)]
  for r in range(h):
    for c in range(w):
      if graph[r][c]:
        result += dfs(r,c)
  print(result)