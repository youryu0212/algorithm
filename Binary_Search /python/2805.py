n,m = map(int,input().split())
nums = list(map(int,input().split()))
result = 0
def search(min_num,max_num):
  global result

  if min_num>max_num: return
  half_num = min_num + (max_num-min_num)//2
  height = 0
  for num in nums:
    temp = num-half_num
    if (temp>0): height+=temp
  if height>=m:
    result = half_num
    search(half_num+1,max_num)
  else:
    search(min_num,half_num-1)
search(0,max(nums))
print(result)