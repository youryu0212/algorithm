n,k = map(int,input().split())

def dec2bin(num):
  arr = []
  while num:
    arr.append(num%2)
    num = num//2
  return arr

def getBottleCount(arr):
  cnt = 0
  for num in arr:
    if num == 1:
      cnt += 1
  return cnt

def getAddBottle(arr):
  for i in range(len(arr)):
    if arr[i] == 1:
      return 2**i

def solution(n,k):
  arr = dec2bin(n)
  answer = 0
  current_cnt = getBottleCount(arr)
  while current_cnt > k:
    more_bottle = getAddBottle(arr)
    answer += more_bottle
    n += more_bottle
    arr = dec2bin(n)
    current_cnt = getBottleCount(arr)
  return answer
answer = solution(n,k)
print(answer)