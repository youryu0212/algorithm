from collections import Counter
n = int(input())
nums = Counter(list(map(int,input().split())))
m = int(input())
arr = list(map(int,input().split()))
print(" ".join(map(str,[nums[num] for num in arr])))
