n,m = map(int,input().split())
def search():
  if n == 1:
    return 1
  if n == 2:
    return min(4,(m+1)//2)
  if m>6:
    return m-2
  return min(4,m)
print(search())