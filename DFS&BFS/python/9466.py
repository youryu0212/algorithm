import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)
T = int(input())
def dfs(n):
  global result
  if visited[n]:
    for i in range(len(route)):
      if route[i] == n: break
      result += 1
    return
  visited[n] = True
  route.append(arr[n])
  dfs(arr[n])


for _ in range(T):
  n = int(input())
  arr = [0] + list(map(int,input().split()))
  visited = [False for _ in range(n+1)]
  result = 0
  for i in range(1,n+1):
    if not visited[i]:
      route = [i]
      dfs(i)
  print(result)