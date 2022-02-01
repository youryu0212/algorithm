from collections import deque
n,m,v = map(int,input().split())
route = [[] for _ in range(n+1)]
for _ in range(m):
    a,b = map(int,input().split())
    route[a].append(b)
    route[b].append(a)
for i in range(1,n+1):
    route[i].sort()
visited = [ False for _ in range(n+1)]
result = ""
def dfs(a):
    global result
    visited[a] = True
    result += str(a)+' '
    for node in route[a]:
        if (visited[node]): continue
        dfs(node)
dfs(v)
print(result)
queue = deque()
queue.append(v)
visited = [ False for _ in range(n+1)]
visited[v] = True
result = ""
while queue:
    node = queue.popleft()
    result += str(node) +" "
    for node in route[node]:
        if (visited[node]): continue
        visited[node] = True
        queue.append(node)
print(result)
    