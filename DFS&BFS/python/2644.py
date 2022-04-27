import collections
n = int(input())
first_people , sec_people = map(int,input().split())
t = int(input())
graph = [[] for _ in range(n+1)]
visited = [False] * (n+1)
for _ in range(t):
    a,b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)
def bfs(graph,start,visited):
    q = collections.deque()
    q.append([start,0])
    visited[start] = True
    while q:
        idx,cnt = q.popleft()
        if idx == sec_people:
            return cnt
        for node in graph[idx]:
            if not visited[node]:
                q.append([node,cnt+1])
                visited[node] = True
    return -1
print(bfs(graph,first_people,visited))