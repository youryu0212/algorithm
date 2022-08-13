n = int(input())
arr = list(map(int,input().split()))
result = 0
total = sum(arr)
for i in range(n-1):
    total -= arr[i]
    result += arr[i] * total
print(result%1000000007)