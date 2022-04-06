import sys
input = sys.stdin.readline
n,m = map(int,input().split())
arr = [list(map(int,input().split())) for _ in range(n)]
moves = [(-1,0),(0,1),(1,0),(0,-1)]
visited = [[False for _ in range(m)] for _ in range(n)]
answer = 0
max_num = 0
for i in range(n):
  for j in range(m):
    max_num = max(max_num,arr[i][j])
def dfs(r,c,cnt,point):
  global answer
  if point + (4-cnt) * max_num < answer:
    return
  if cnt == 4:
    answer = max(answer,point)
    return
  for move in moves:
    nr,nc = move[0]+r, move[1]+c
    if nr<0 or nc<0 or nr>=n or nc>=m:
      continue
    if visited[nr][nc]: continue
    if cnt == 2 :
      visited[nr][nc] = True
      dfs(r,c,cnt+1,point+arr[nr][nc])
      visited[nr][nc] = False
    visited[nr][nc] = True
    dfs(nr,nc,cnt+1,point+arr[nr][nc])
    visited[nr][nc] = False
for i in range(n):
  for j in range(m):
    visited[i][j] = True
    dfs(i,j,1,arr[i][j])
    visited[i][j] = False
print(answer)