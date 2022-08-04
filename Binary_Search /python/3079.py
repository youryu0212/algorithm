n,m = map(int,input().split())
arr = [int(input()) for _ in range(n)]

def search ():
  left,right = 0,10**18*9
  while left+1<right:
    mid = left + (right-left)//2
    cnt = 0
    for num in arr:
      cnt += mid//num
    if cnt >= m:
      right = mid
    else:
      left = mid
  return right
answer = search()
print(answer)