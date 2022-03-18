n = int(input())
arr = [list(map(int,input().split())) for _ in range(n)]
result = [0,0]

def search(r,c,n):
  global result
  num = arr[r][c]
  for i in range(r,r+n):
    for j in range(c,c+n):
      if (num != arr[i][j]):
        gap = n//2
        search(r,c,gap)
        search(r+gap,c,gap)
        search(r,c+gap,gap)
        search(r+gap,c+gap,gap)
        return False
  result[num] += 1
  return True

search(0,0,n)
print("\n".join(map(str,result)))