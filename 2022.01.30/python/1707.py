import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

def dfs(node,node_array,visited,result):
  if result == "NO" : return
  if visited[node][0] : return 0
  now = visited[node][1]
  visited[node][0] = True
  for i in range(len(node_array[node])):
    next_node = node_array[node][i]
    if (visited[next_node][0]): continue
    if (visited[next_node][1] == now):
      result = "NO"
      return
    if now == 1 : visited[next_node][1] = 2
    if now == 2 : visited[next_node][1] = 1
    dfs(next_node,node_array,visited,result)


k = int(input())
for _ in range(k):
  v,e = map(int,input().split())
  node_array = [[] for _ in range(v+1)]
  visited = [[False,0] for _ in range(v+1)]
  result = "YES"
  for i in range(1,e+1):
    a,b = map(int,input().split())
    node_array[a].append(b)
    node_array[b].append(a)
  for i in range(1,v+1):
    if (visited[i][1] == 0 ): visited[i][1] = 1
    dfs(i,node_array,visited,result)
  if (result != "NO"):
    for i in range(v+1):
      now = visited[i][1]
      for j in range(len(node_array[i])):
        if (visited[node_array[i][j]][1] == now):
          result = "NO"
          break
      if result == "NO":
        break
  print(result)
