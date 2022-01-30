nums = list(map(int,input().split()))
as_bool = des_bool = True
result = "mixed"
for i in range(1,len(nums)):
    if not (as_bool or des_bool) : break
    if nums[i]>nums[i-1]: des_bool = False
    if nums[i]<nums[i-1]: as_bool = False
if as_bool : result = "ascending"
if des_bool : result = "descending"
print(result)