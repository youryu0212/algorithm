from collections import deque
n,k = map(int,input().split())
q = deque([i for i in range(1,n+1)])
cnt = 0
result = []
while q:
  cnt+=1
  if (cnt==k): 
    result.append(q.popleft())
    cnt = 0
  else: q.append(q.popleft())
print(f"<{', '.join(map(str,result))}>")