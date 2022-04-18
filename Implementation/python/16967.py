h,w,x,y = map(int,input().split())

arr = [list(map(int,input().split())) for _ in range(h+x)]
a = [[0 for _ in range(w)] for _ in range(h)]
for i in range(h):
  for j in range(w):
    if i-x < 0 or j-y < 0:
      a[i][j] = arr[i][j]
      continue
    a[i][j] = arr[i][j] - a[i-x][j-y]

for i in range(h):
  print(" ".join(map(str,a[i])))
