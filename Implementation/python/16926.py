import sys
input = sys.stdin.readline
n,m,r = map(int,input().split())
arr = [list(map(int,input().rstrip().split())) for _ in range(n)]
moves = [[1,0],[0,1],[-1,0],[0,-1]]

def rotate (i):
  prev = arr[i][i]
  for j in range(i+1,n-i):
    arr[j][i], prev = prev, arr[j][i]
  for j in range(i+1,m-i):
    arr[n-1-i][j], prev = prev, arr[n-1-i][j]
  for j in range(i+1,n-i):
    arr[n-1-j][m-1-i],prev = prev, arr[n-1-j][m-1-i]
  for j in range(i+1,m-i):
    arr[i][m-1-j],prev = prev, arr[i][m-1-j]

def solution(r):
  for i in range(r):
    for j in range(min(n,m)//2):
      rotate(j)

solution(r)
print("\n".join(" ".join(list(map(str,arr[i]))) for i in range(n)))


# 매우 느린 풀이
# import sys
# input = sys.stdin.readline
# n,m,r = map(int,input().split())
# arr = [list(map(int,input().rstrip().split())) for _ in range(n)]
# moves = [[1,0],[0,1],[-1,0],[0,-1]]

# def rotate (i,visited):
#   r=c=i
#   d = 0
#   prev = arr[r][c]
#   while d<4:
#     move = moves[d]
#     nr,nc = move[0]+r, move[1]+c
#     if nr<0 or nc<0 or nr>=n or nc>=m:
#       d += 1
#       continue
#     if visited[nr][nc]:
#       d += 1
#       continue
#     visited[nr][nc] = True
#     arr[nr][nc],prev = prev,arr[nr][nc]
#     r,c = nr,nc
# def solution(cnt):
#   if cnt ==0:
#     return
#   visited =[[False for _ in range(m)] for _ in range(n)]
#   for i in range(min(n,m)//2):
#     rotate(i,visited)
#   solution(cnt-1)
# solution(r)

# print("\n".join(" ".join(list(map(str,arr[i]))) for i in range(n)))