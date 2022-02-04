import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
t = int(input())
moves = [(-1,0),(0,1),(1,0),(0,-1)]
def dfs(r,c):
  if arr[r][c] == 0 : return 0
  arr[r][c] = 0
  for move in moves:
    nx,ny = move[0] + r, move[1]+c
    if (nx>=n or ny>= m or nx<0 or ny<0): continue
    dfs(nx,ny)
  return 1

for _ in range(t):
  m,n,k = map(int,input().split())
  arr = [[0 for _ in range(m)] for _ in range(n)]
  for _ in range(k):
    c,r = map(int,input().split())
    arr[r][c] = 1
  result = 0
  for i in range(n):
    for j in range(m):
      if arr[i][j]:
        result += dfs(i,j)
  print(result)