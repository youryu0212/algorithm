n = int(input())
arr = sorted([list(map(int,input().split())) for _ in range(n)], key = lambda x : (x[1],x[0]))
end_time = 0
cnt = 0
for table in arr:
  if table[0] >= end_time:
    end_time = table[1]
    cnt+=1
print(cnt)