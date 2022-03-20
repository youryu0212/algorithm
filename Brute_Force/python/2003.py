n,m = map(int,input().split())
nums = list(map(int,input().split()))

nums_sum = [0 for _ in range(n+1)]
for i in range(1,n+1):
    nums_sum[i] = nums_sum[i-1] + nums[i-1] # nums_sum[1] = nums 배열 첫번째 인덱스까지의 합
start = 0
end = 1
result = 0
while start<n:
    now = nums_sum[end]-nums_sum[start]
    if now > m:
        start += 1
        continue
    if now == m:
        result += 1
        start+=1
        continue
    if end == n:
        start += 1
        continue
    end += 1
print(result)