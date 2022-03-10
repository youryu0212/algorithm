n = int(input())
arr = [[] for _ in range(n+1)]
for _ in range(int(input())):
  a,b = map(int,input().split())
  arr[a].append(b)
  arr[b].append(a)
visited = [False for _ in range(n+1)]

def dfs (i):
  visited[i] = True
  for node in arr[i]:
    if (visited[node]) : continue
    visited[node] = True
    dfs(node)

dfs(1)
cnt = -1
for node in visited:
  if node: cnt+=1
print(cnt)