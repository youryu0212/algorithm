import sys
input = sys.stdin.readline
def binary_search (arr,num):
  left,right = 0,len(arr)-1
  
  while left+1 < right:
    mid = left + (right-left)//2
    
    if arr[mid] == num:
      return 1

    if arr[mid] > num:
      right = mid
    else:
      left = mid
      
  if (arr[left] == num or arr[right] == num):
    return 1
  return 0

def solution ():
  T = int(input())
  answer = []
  for _ in range(T):
    n = int(input())
    arr = sorted(map(int,input().split()))
    m = int(input())
    target_arr = map(int,input().split())
    for num in target_arr:
      answer.append(binary_search(arr,num))
  return "\n".join(map(str,answer))

# set 이용한 풀이
def solution_2 ():
  T = int(input())
  answer = []
  for _ in range(T):
    n = int(input())
    arr = set(map(int,input().split()))
    m = int(input())
    target_arr = map(int,input().split())
    for num in target_arr:
      if num in arr:
        answer.append(1)
      else:
        answer.append(0)
  return "\n".join(map(str,answer))

answer = solution()
print(answer)



answer = solution()
print(answer)

