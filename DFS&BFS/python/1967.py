from collections import deque
import sys
input = sys.stdin.readline
n = int(input())
data = [[] for _ in range(n+1)]
idx = 1
for _ in range(n-1):
    a,b,c = map(int,input().split())
    data[a].append([b,c])
    data[b].append([a,c])
    
def search(tree,visited,v):
    queue = deque()
    queue.append([v,0])
    max_cost = 0
    idx = 0
    while queue:
        node,cost = queue.popleft()
        if max_cost<cost:
            idx = node
            max_cost = cost
        visited[node] = True
        for next_ in tree[node]:
            next_node = next_[0]
            next_cost = next_[1]
            if visited[next_node]:
                continue
            queue.append([next_node,cost+next_cost])
    return idx,max_cost

for _ in range(2):
    visited = [False for _ in range(n+1)]
    idx,max_cost = search(data,visited,idx)

print(max_cost)