n = int(input())
arr = list(map(int,input().split()))
max_num = max(arr)
result = 0
sosoo = [False for _ in range(max_num+1)]
sosoo[0] = sosoo[1] = True
for i in range(2,int(max_num**0.5)+1):
    j = 2
    while (i*j <=max_num):
        sosoo[i*j] = True
        j += 1
for num in arr:
    if not sosoo[num]:
        result += 1
print(result)