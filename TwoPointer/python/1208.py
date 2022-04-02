import sys
input = sys.stdin.readline
n,target = map(int,input().split())
arr = list(map(int,input().split()))

sec = n//2
first = n-sec

left_arr = [0 for _ in range(1<<first)]
right_arr = [0 for _ in range(1<<sec)]

for i in range(1<<first):
  for j in range(first):
    if i & (1<<j):
      left_arr[i] += arr[j]
for i in range(1<<sec):
  for j in range(sec):
    if i & (1<<j):
      right_arr[i] += arr[first+j]

left_arr.sort()
right_arr.sort(reverse=True)
left,right = 0,0

answer = 0
llen = len(left_arr)
rlen = len(right_arr)

while left<llen and right<rlen:
  num = left_arr[left] + right_arr[right]
  if num == target:
    a = 1
    b = 1
    while left+1<llen and left_arr[left] == left_arr[left+1]:
      a += 1
      left += 1
    while right+1<rlen and right_arr[right] == right_arr[right+1]:
      b += 1
      right += 1
    answer += a*b
    left += 1
    right += 1
    continue
  if num > target:
    right += 1
    continue
  left += 1
if target == 0:
  answer -= 1
print(answer)