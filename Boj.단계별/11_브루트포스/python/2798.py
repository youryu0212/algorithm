n,m = map(int,input().split())
nums = list(map(int,input().split()))
result = 0
for i in range(len(nums)-2):
    for j in range(i+1,len(nums)-1):
        for k in range(j+1,len(nums)):
            temp = nums[i]+nums[j]+nums[k]
            if m>=temp>result:
                result = temp
print(result)