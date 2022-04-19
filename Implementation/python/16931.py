n,m = map(int,input().split())
arr = [list(map(int,input().split())) for _ in range(n)]

one = n*m
two = 0
three = 0
for r in range(n):
  for c in range(m):
    if c == 0:
      two += arr[r][c]
      continue
    if arr[r][c-1] < arr[r][c]:
      two += arr[r][c] - arr[r][c-1]

for r in range(n-1,-1,-1):
  for c in range(m):
    if r==n-1:
      three += arr[r][c]
      continue
    if arr[r+1][c] < arr[r][c]:
      three += arr[r][c] - arr[r+1][c]
print((one+two+three)*2)
