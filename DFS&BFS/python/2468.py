import collections
def bfs(graph,x_pos,y_pos,rain,visited):
    if graph[x_pos][y_pos] <= rain or visited[x_pos][y_pos]:
        visited[x_pos][y_pos] = True
        return 0
    dx = [0,0,1,-1]
    dy = [1,-1,0,0]
    q = collections.deque()
    q.append([x_pos,y_pos])
    visited[x_pos][y_pos] = True
    while q:
        x,y = q.popleft()
        for i in range(len(dx)):
            nx = dx[i] + x
            ny = dy[i] + y
            if nx>=0 and ny>= 0 and nx<len(graph) and ny<len(graph[0]) and not visited[nx][ny] :
                visited[nx][ny] = True
                if graph[nx][ny] > rain:
                    q.append([nx,ny])
    return 1
n = int(input())
graph = []
# 인덱스 0,0 부터 시작
for _ in range(n):
    graph.append(list(map(int,input().split())))
max_len = 0
for g in graph:
    temp = max(g)
    if max_len < temp:
        max_len = temp
result = 0
for rain in range(max_len):
    cnt = 0
    visited = [[False for _ in range(n)] for _ in range(n)]
    for i in range(len(graph)):
        for j in range(len(graph[0])):
            cnt += bfs(graph,i,j,rain,visited)
    if cnt>result:
        result = cnt
print(result)