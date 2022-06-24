import sys
input = sys.stdin.readline
def dfs (prev_node,node,arr,visited):
  visited[node] = True
  for next_node in arr[node]:
    if (prev_node == next_node):
      continue
    if (visited[next_node]):
      return False
    if not dfs(node,next_node,arr,visited):
      return False
  return True
  

def printAnswer (answer):
  for i in range(1,len(answer)):
    cnt = answer[i]
    template = "No trees."
    if cnt>1:
      template = f"A forest of {cnt} trees."
    if cnt==1:
      template = "There is one tree."
    print(f"Case {i}: {template}")

answer = [None]
while True:
  N,M = map(int,input().split())
  if N == M == 0:
    break
  arr = [[] for _ in range(N+1)]
  visited = [False for _ in range(N+1)]
  cnt = 0
  for _ in range(M):
    a,b = map(int,input().split())
    arr[a].append(b)
    arr[b].append(a)

  for node in range(1,N+1):
    if (visited[node]):
      continue
    if dfs(-1,node,arr,visited):
      cnt += 1
  answer.append(cnt)

printAnswer(answer)