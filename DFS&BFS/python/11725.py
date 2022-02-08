from collections import deque
import sys
input = sys.stdin.readline
n = int(input())
tree = [[] for _ in range(n+1)]
parent_node = [0 for _ in range(n+1)]

for _ in range(n-1):
  a,b = map(int,input().split())
  tree[a].append(b)
  tree[b].append(a)

def bfs(parent_node):
    q = deque()
    parent_node[1] = True
    parent_node[0] = True
    q.append(1)
    while q:
        node = q.popleft()
        for next_node in tree[node]:
            if parent_node[next_node] == 0 :
                parent_node[next_node] = node
                q.append(next_node)
    return parent_node
bfs(parent_node)
for i in range(2,n+1):
    print(parent_node[i])
