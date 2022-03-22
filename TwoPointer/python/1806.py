n,s = map(int,input().split())
arr = list(map(int,input().split()))
nums_sum = [0 for _ in range(len(arr)+1)]
for i in range(1,len(arr)+1):
  nums_sum[i] = nums_sum[i-1] + arr[i-1]
left,right = 0,1

infinite = 10**18*9
answer = infinite
while left<n:
  num = nums_sum[right] - nums_sum[left]
  if (num >= s):
    answer = min(answer,right-left)
    left += 1
    continue
  if right<n:
    right +=1
    continue
  left+=1
if answer == infinite:
  answer = 0
print(answer)