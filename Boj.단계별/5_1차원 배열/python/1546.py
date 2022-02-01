n = int(input())
arr = list(map(int,input().split()))
max_num = max(arr)
result = 0
for i in range(n):
    result += arr[i]/max_num*100
print(result/n)