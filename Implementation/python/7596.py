n = int(input())
cnt = 1
while n:
  arr = []
  for _ in range(n):
    arr.append(input())
  arr.sort()
  print(cnt)
  print("\n".join(arr))
  cnt += 1
  n = int(input())