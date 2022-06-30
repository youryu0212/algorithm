def solution():
  N,M = map(int,input().split())
  moves = [[0,0], [0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1]]

  arr = [list(map(int,input().split())) for _ in range(N)]
  cloud_arr = [
    getNextPosition(moves,N,N-2,0,0,1),
    getNextPosition(moves,N,N-1,0,0,1),
    getNextPosition(moves,N,N-2,1,0,1),
    getNextPosition(moves,N,N-1,1,0,1),
  ]
  
  for _ in range(M):
    d,s = map(int,input().split())
    next_cloud_arr = set()

    while cloud_arr:
      r,c = cloud_arr.pop()
      r,c = getNextPosition(moves,N,r,c,d,s) 
      arr[r][c] += 1
      next_cloud_arr.add((r,c))
    
    for r,c in next_cloud_arr:
      water = getCopyWater(arr,moves,r,c,N)
      arr[r][c] += water
    if not cloud_arr:
      cloud_arr = getCloudArr(arr,next_cloud_arr)
  answer = 0  
  for row in arr:
    answer += sum(row)
  return answer


def getCloudArr(arr,prev_cloud_arr):
  cloud_arr = []
  for r in range(len(arr)):
    for c in range(len(arr[0])):
      if (r,c) in prev_cloud_arr:
        continue
      if arr[r][c] >=2 :
        arr[r][c] -= 2
        cloud_arr.append([r,c])
  return cloud_arr

def getCopyWater(arr,moves,r,c,N):
  water = 0
  for i in range(2,len(moves),2):
    dr,dc = moves[i]
    nr,nc = r+dr, c+dc
    if nr<0 or nc<0 or nr>=N or nc>=N:
      continue
    if arr[nr][nc]==0:
      continue
    water += 1
  return water

def getNextPosition (moves,N,r,c,d,s):
  for _ in range(s):
    dr,dc = moves[d]
    r,c = dr+r, dc+c
    if (r<0):
      r = N-1
    if (c<0):
      c = N-1
  return r%N,c%N

answer = solution()
print(answer)