import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
n,m = map(int,input().split())
arr = [[] for _ in range(n+1)]
visited = [False for _ in range(n+1)]
result = 0

for _ in range(m):
    a,b = map(int,input().split())
    arr[a].append(b)
    arr[b].append(a)

def dfs(a):
    if visited[a]: return 0
    visited[a] = True
    for node in arr[a]:
        if visited[node] : continue
        dfs(node)
    return 1

for i in range(1,n+1):
    result += dfs(i)
print(result)