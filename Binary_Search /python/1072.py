def calWinRate(x,y):
  return int((y*100/x*100)/100)

def check(x,y,mid,firstRate):
  return calWinRate(x+mid,y+mid)!=firstRate

def binary_search (x,y,firstRate):
  left,right = 0,x
  while left+1 < right:
    mid = left + (right-left)//2
    if check(x,y,mid,firstRate):
      right = mid
    else:
      left = mid
  if (calWinRate(x+right,y+right)==firstRate):
    right = -1
  return right
  

x,y = map(int,input().split())
firstRate = calWinRate(x,y)
answer = binary_search(x,y,firstRate)
print(answer)