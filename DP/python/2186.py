import sys
input = sys.stdin.readline
moves = [(-1,0),(0,1),(1,0),(0,-1)]

def dfs(r,c,depth):
  if depth == len(word):
    return 1
  if visited[r][c][depth] != -1:
    return visited[r][c][depth]
  visited[r][c][depth] = 0
  for move in moves:
    x,y = r,c
    for _ in range(k):
      nx,ny = x+move[0], y+move[1]
      if nx < 0 or ny<0 or nx>=n or ny>=m:
        continue
      if arr[nx][ny] == word[depth]:
        visited[r][c][depth] += dfs(nx,ny,depth+1)
      x,y = nx,ny
  return visited[r][c][depth]

n,m,k = map(int,input().split())
arr = [list(input().rstrip()) for _ in range(n)]
word = input().rstrip()

q = []
for i in range(n):
  for j in range(m):
    if arr[i][j] == word[0]:
      q.append([i,j])
answer = 0
visited = [[[-1 for _ in range(len(word))] for _ in range(m)] for _ in range(n)]
for i in range(len(q)):
  x,y = q[i]
  answer += dfs(x,y,1)
print(answer)