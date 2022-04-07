import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

n = int(input())
arr = [list(input().rstrip()) for _ in range(n)]

def search():
  visited = [[False for _ in range(n)] for _ in range(n)]
  moves = [[-1,0],[0,1],[1,0],[0,-1]]
  answer = [0,0]
  def dfs(r,c,color):
    for move in moves:
      nr,nc = move[0]+r, move[1]+c
      if nr<0 or nc<0 or nr>=n or nc>=n: continue
      if visited[nr][nc]:continue
      if arr[nr][nc] != color: continue
      visited[nr][nc] = True
      dfs(nr,nc,color)
  for i in range(n):
    for j in range(n):
      if visited[i][j]: continue
      visited[i][j] = True
      answer[0] += 1
      dfs(i,j,arr[i][j])
  visited = [[False for _ in range(n)] for _ in range(n)]
  for i in range(n):
    for j in range(n):
      if arr[i][j] == "G":
        arr[i][j] = "R"
  for i in range(n):
    for j in range(n):
      if visited[i][j]: continue
      visited[i][j] = True
      answer[1] += 1
      dfs(i,j,arr[i][j])
  return answer
a,b = search()
print(a,b)