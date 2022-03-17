from collections import deque
a,b,c = map(int,input().split())
result = set()
visited = set()
q = deque()
q.append((0,0,c))
visited.add((0,0,c))
result.add(c)

def check (x,y,z):
  if (x,y,z) in visited : return False
  return True
def add_fnc (nx,ny,nz):
  visited.add((nx,ny,nz))
  q.append((nx,ny,nz))
  if nx==0:
    result.add(nz)
while q:
  x,y,z = q.popleft()
  nx,ny,nz = x-min(x,b-y),y+min(b-y,x),z
  if check(nx,ny,nz):
    add_fnc(nx,ny,nz)
  nx,ny,nz = x-min(x,c-z),y,z+min(x,c-z)
  if check(nx,ny,nz):
    add_fnc(nx,ny,nz)
  nx,ny,nz = x+min(a-x,y),y-min(a-x,y),z
  if check(nx,ny,nz):
    add_fnc(nx,ny,nz)
  nx,ny,nz = x,y-min(c-z,y),z+min(c-z,y)
  if check(nx,ny,nz):
    add_fnc(nx,ny,nz)
  nx,ny,nz = x+min(a-x,z),y,z-min(a-x,z)
  if check(nx,ny,nz):
    add_fnc(nx,ny,nz)
  nx,ny,nz = x,y+min(b-y,z),z-min(b-y,z)
  if check(nx,ny,nz):
    add_fnc(nx,ny,nz)
print(" ".join(map(str,sorted(result))))