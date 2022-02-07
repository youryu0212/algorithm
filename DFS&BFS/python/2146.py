from collections import deque
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)
n = int(input())
graph = [list(map(int,input().split())) for _ in range(n)]
cnt = 2
moves = [(-1,0),(0,1),(1,0),(0,-1)]
land_list = [];
result = 10**18*9


def dfs(r,c,num):
    if graph[r][c] != 1 : return

    graph[r][c] = num
    for move in moves:
        nx,ny = move[0]+r , move[1] +c
        if nx>=n or ny>=n or nx<0 or ny<0: continue
        if graph[nx][ny] == 1: dfs(nx,ny,num)

def bfs(land_num):
    q = deque()
    distance_array = [[0 for _ in range(n)] for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if graph[i][j] == land_num:
                q.append((i,j,0))
    while q:
        x,y,dis = q.popleft()
        for move in moves:
            nx,ny = x+move[0], y+move[1]
            if nx>=n or ny>=n or nx<0 or ny<0: continue
            if graph[nx][ny] == 0 and distance_array[nx][ny] == 0:
                distance_array[nx][ny] = dis+1
                q.append((nx,ny,dis+1))
            if graph[nx][ny] != land_num and graph[nx][ny] != 0:
                return dis




for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            land_list.append(cnt)
            dfs(i,j,cnt)
            cnt+=1

while len(land_list) > 1:
    land_num = land_list.pop()
    result = min(result,bfs(land_num))
print(result)