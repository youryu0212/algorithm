N,X = map(int,input().split())
arr = list(map(int,input().split()))
answer = [0,0]
total = 0
for i in range(len(arr)):
  total+= arr[i]
  if i >= X:
    total -= arr[i-X]
  if answer[0] <= total:
    if answer[0] == total:
      answer[1] += 1
      continue
    answer[0] = total
    answer[1] = 1

if answer[0] == 0:
  print("SAD")
else:
  print(answer[0])
  print(answer[1])

