from collections import deque
n = int(input())
graph = []
houses = []
house_cnt = 0
for i in range(n):
    graph.append(list(map(int,input())))

def bfs(x,y):
    if graph[x][y] == 0:
        return False
    queue = deque()
    queue.append((x,y))
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    graph[x][y] = 0
    result = 1 
    while queue:
        x,y = queue.popleft()
        for i in range(len(dx)):
            nx = x+dx[i]
            ny = y+dy[i]
            if nx>=0 and ny>= 0 and nx<n and ny<n and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append((nx,ny))
                result += 1
    return result
for i in range(n):
    for j in range(n):
        if graph[i][j] == 0 : continue
        houses.append(bfs(i,j))
        house_cnt+=1
houses.sort()
print(house_cnt)
for house in houses:
    print(house)