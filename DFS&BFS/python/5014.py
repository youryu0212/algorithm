from collections import deque
f,s,g,u,d = map(int,input().split())

q = deque()
result = "use the stairs"
if (s!=g):
  q.append((s,0))
else:
  result = 0


visited = [False for _ in range(f+1)]
visited[s] = True
while q:
  cur,cnt = q.popleft()
  if cur+u<=f:
    if cur+u == g:
      result = cnt+1
      break
    if not visited[cur+u]:
      visited[cur+u] = True
      q.append((cur+u,cnt+1))
  if cur-d>=1:
    if cur-d == g:
      result = cnt+1
      break
    if not visited[cur-d]:
      visited[cur-d] = True
      q.append((cur-d,cnt+1))
print(result)