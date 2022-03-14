from collections import deque
t = int(input())
visited = [False for _ in range(10000)]

for i in range(2,int(9999**0.5)+1):
  j = 2
  while (i*j <=9999):
    visited[i*j] = True
    j+=1

sosoo = set(i for i in range(1000,10000) if visited[i] == False)

for _ in range(t):
  num,target = map(int,input().split())
  q = deque()
  q.append((num,0))
  result = "Impossible"
  visited = set()
  visited.add(num)
  while q:
    num,cnt = q.popleft()
    if num == target:
      result = cnt
      break
    for i in range(10):
      arr = []
      arr.append((num//10)*10+i)
      arr.append((num//100)*100 + (num%10) + (i*10))
      arr.append((num//1000)*1000 + (num%100) + i*100)
      if i != 0: arr.append((num%1000)+ (i*1000))
      for next_num in arr:
        if next_num not in sosoo: continue
        if next_num in visited: continue
        visited.add(next_num)
        q.append((next_num,cnt+1))
  print(result)