import sys

sys.setrecursionlimit(10**9)

c,r,k = map(int,input().split())

board = [[False for _ in range(c)] for _ in range(r)]
moves =[(-1,0),(0,1),(1,0),(0,-1)]
answer = 0

for _ in range(k):
  ar,ac,br,bc = map(int,input().split())
  for x in range(ar,br):
    for y in range(ac,bc):
      board[x][y] = True

def check_range(nr,nc):
  global r,c
  return nr < 0 or nc<0 or nr>=r or nc>=c

depth = 0

def dfs (r,c):
  global depth
  for dr,dc in moves:
    nr,nc = r+dr, c+dc
    if check_range(nr,nc):
      continue
    if (board[nr][nc]):
      continue
    board[nr][nc] = True
    depth+=1
    max(answer,dfs(nr,nc))
  return depth
  

area = []
    
for i in range(r):
  for j in range(c):
    if (board[i][j]):
      continue
    board[i][j] = True
    answer += 1
    depth = 1
    area.append(dfs(i,j))
print(answer)
print(" ".join(map(str,sorted(area))))