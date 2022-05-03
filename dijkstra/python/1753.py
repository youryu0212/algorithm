from collections import deque
import sys
input = sys.stdin.readline
INF = 10**18*9

v,e = map(int,input().split())
start = int(input())
graph = [[] for _ in range(v+1)]
cost_list = [INF for _ in range(v+1)]
cost_list[start] = 0
node_set = set()
queue = deque()
queue.append(start)
visited = [False for _ in range(v+1)]
for _ in range(e):
    arr = list(map(int,input().split()))
    graph[arr[0]].append(arr[1:])

while queue:
    node = queue.popleft()
    visited[node] = True
    for next_node in graph[node]:
        if visited[next_node[0]]:
            continue
        idx = next_node[0]
        cost = next_node[1]
        cost_list[idx] = min(cost_list[node] + cost,cost_list[idx])
        node_set.add(idx)
    min_idx = 0
    min_value = INF
    for idx in node_set:
        if visited[idx]:
            node_set.remove(idx)
        if cost_list[idx] < min_value:
            min_idx = idx
            min_value = cost_list[idx]
    if min_idx!=0:
        queue.append(min_idx)
        node_set.remove(min_idx)
for i in range(1,v+1):
    if cost_list[i] == INF:
        cost_list[i] = "INF"
    print(cost_list[i])