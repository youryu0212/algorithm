import math

n,m = map(int,input().split())
arr = [int(input()) for _ in range(m)]

def get_head_count (type,arr,num):
  cnt = 0
  flag = False
  if type == "min":
    for jewel in arr:
      cnt += math.ceil(jewel/num)
  else:
    for jewel in arr:
      if jewel >= num and not flag:
        cnt += 1 + (jewel-num)
        flag = True
      else:
        cnt += jewel
  return cnt

def binary_search(n,arr):
  left,right = 0,max(arr)

  while left+1 < right:
    mid = left + (right-left)//2
    min_ = get_head_count("min",arr,mid)
    max_ = get_head_count("max",arr,mid)

    if min_ <= n and max_ >= n:
      right = mid
    else:
      left = mid
  return right

answer = binary_search(n,arr)
print(answer)
