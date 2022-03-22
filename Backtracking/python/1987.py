n,m = map(int,input().split())
arr = [list(input()) for _ in range(n)]

moves = [(-1,0),(0,1),(1,0),(0,-1)]
visited = set()
answer = 0
def search(r,c,cnt):
  global answer
  if cnt>answer:
    answer = cnt
  for move in moves:
    nx,ny = r+move[0], c+move[1]
    if nx<0 or ny<0 or nx>=n or ny>=m:
      continue
    if arr[nx][ny] in visited:
      continue
    visited.add(arr[nx][ny])
    search(nx,ny,cnt+1)
    visited.remove(arr[nx][ny])
visited.add(arr[0][0])
search(0,0,1)
print(answer)