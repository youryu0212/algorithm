N = int(input())
route = [[] for _ in range(N+1)]
for _ in range(N-1):
  a,b,c = map(int,input().split())
  route[a].append((b,c))
  route[b].append((a,c))

stack = []
stack.append((1,0))
visited = [False for _ in range(N+1)]
visited[1] = True
answer = 0
while stack:
  node,cost = stack.pop()
  for next_node,next_cost in route[node]:
    if visited[next_node]:
      continue
    visited[next_node] = True
    stack.append((next_node,cost+next_cost))
  answer = max(answer,cost)
print(answer)