N,A,B = map(int,input().split())

def ceil(num):
  if num%1:
    return int(num)+1
  return int(num)

def search (a,b):
  round = 1
  while abs(a-b) != 1 or max(a,b) % 2:
    round += 1
    a = ceil(a/2)
    b = ceil(b/2)
  return round
print(search(A,B))