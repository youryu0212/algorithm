import sys
from collections import deque

input = sys.stdin.readline
n,k = map(int,input().split())

def solution(n,k):
  q = deque()
  q.append([n,0])
  answer = [0,0]
  visited = [False for _ in range(100001)]

  if n>k:
    print("\n".join([str(n-k),"1"]))
    exit()

  while q:
    pos,cnt = q.popleft()
    visited[pos] = True

    if answer[0] != 0 and cnt > answer[0]:
      break

    if pos == k:
      answer[0] = cnt
      answer[1] += 1
    
    if answer[0] != 0:
      continue

    if pos<0 or pos>=100001:
      continue

    if 0 <= pos-1 <=100000 and not visited[pos-1] :
      q.append([pos-1,cnt+1])
    
    if 0 <= pos+1 <=100000 and not visited[pos+1] :
      q.append([pos+1,cnt+1])

    if 0 <= pos*2 <=100000 and not visited[pos*2] :
      q.append([pos*2,cnt+1])

  return "\n".join(map(str,answer))
answer = solution(n,k)
print(answer)
