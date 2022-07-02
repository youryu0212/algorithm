T = int(input())
def binary_search(arr,num):
  left,right = 0,len(arr)
  while left+1 < right:
    mid = left + (right-left)//2
    if arr[mid]<num:
      left = mid
    else:
      right = mid
  if arr[left] < num:
    return left+1
  return left

for _ in range(T):
  n,m = map(int,input().split())
  a = list(map(int,input().split()))
  b = sorted(map(int,input().split()))
  answer = 0
  for num in a:
    answer += binary_search(b,num)
  print(answer)