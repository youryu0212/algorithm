from collections import deque

n,m = map(int,input().split())
arr = [[[] for _ in range(n+1)] for _ in range(n+1)]
for _ in range(m):
  x,y,a,b = map(int,input().split())
  arr[x][y].append((a,b))

def checkRange (x,y):
  return not (x<=0 or y<=0 or x>n or y>n)

def bfs ():
  q = deque()
  q.append((1,1))
  visited = [[False for _ in range(n+1)] for _ in range(n+1)]
  lightOn = [[False for _ in range(n+1)] for _ in range(n+1)]
  lightOn[1][1] = True
  visited[1][1] = True
  cnt = 1
  moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  
  while q:
    x,y = q.popleft()
    for a,b in arr[x][y]:
      if visited[a][b]:
        continue
      if not lightOn[a][b]:
        cnt += 1
      lightOn[a][b] = True
      for dx,dy in moves:
        nx,ny = a+dx,b+dy
        if not checkRange(nx,ny):
          continue
        if lightOn[nx][ny] and visited[nx][ny]:
          visited[a][b] = True
          q.append([a,b])
          break
    for dx,dy in moves:
      nx,ny = x+dx,y+dy
      if not checkRange(nx,ny):
        continue
      if lightOn[nx][ny] and not visited[nx][ny]:
        visited[nx][ny] = True
        q.append([nx,ny])
  return cnt;

answer = bfs();
print(answer);
