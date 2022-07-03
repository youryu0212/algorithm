N,M = map(int,input().split())

arr = [int(input()) for _ in range(N)]
MIN_MONEY = max(arr)

def checkCount(arr,mid):
  cnt = 1
  money = mid
  for num in arr:
    if money<num:
      money = mid
      cnt += 1
    money -= num
  return cnt <= M
    

def binary_search ():
  left,right = MIN_MONEY-1, (10000*100000)+1
  while left+1 < right:
    mid = left + (right-left)//2
    if checkCount(arr,mid):
      right = mid
    else:
      left = mid
  return right

answer = binary_search()
print(answer)