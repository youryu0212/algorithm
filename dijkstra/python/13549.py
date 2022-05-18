from heapq import heappush, heappop

n,m = map(int,input().split())
visited = [False for _ in range(200001)]

def check_position(position):
  if position < 0 or position >=200000 or visited[position]:
    return False
  return True


def search (n,m):
  heap = []
  heappush(heap,[0,n])
  visited[n] = True
  
  while heap:
    time,position = heappop(heap)
    visited[position] = True
    if position == m:
      return time
    if check_position(position+1):
      heappush(heap,[time+1,position+1])
    if check_position(position-1):
      heappush(heap,[time+1,position-1])
    if check_position(position*2):
      heappush(heap,[time,position*2])

answer = search(n,m)
print(answer)