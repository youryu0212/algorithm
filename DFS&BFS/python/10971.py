import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)
n = int(input())
arr = [list(map(int,input().split())) for _ in range(n)]

max_num = 10**18*9
result = max_num

def dfs (cnt,value,idx,first_idx,visited):
  global result
  if value >= result:
    return
  if cnt == n:
    if arr[idx][first_idx] ==0: return
    result = min(result,value+arr[idx][first_idx])
    return
  for i in range(n):
    if visited[i]: continue
    if arr[idx][i] == 0 : continue
    visited[i] = True
    dfs(cnt+1,value+arr[idx][i],i,first_idx,visited)
    visited[i] = False

def search ():
  visited = [False for _ in range(n)]
  for i in range(n):
    visited[i] = True
    dfs(1,0,i,i,visited)
    visited[i] = False
search()
if result == max_num:
  result = 0
print(result)