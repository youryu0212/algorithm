from collections import deque
n,m = map(int,input().split())
dic = {}
for _ in range(n+m):
  a,b = map(int,input().split())
  dic[a] = b

def search ():
  visited = [False for _ in range(101)]
  visited[1] = True
  q = deque()
  q.append((1,0))
  while q:
    idx,cnt = q.popleft()
    if idx == 100:
      return cnt
      break
    for i in range(1,7):
      next_ = idx+i
      if next_ > 100 : continue
      if visited[next_] : continue
      visited[next_] = True
      if next_ in dic:
        next_ = dic[next_]
        visited[next_]
      q.append((next_,cnt+1))

print(search())