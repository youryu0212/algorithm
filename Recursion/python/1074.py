n,r,c = map(int,input().split())
result = 0;

def sol(n,x,y,value):
  global result
  if n == 0:
    if (x==r and y==c): result = value
    return
  if x>r or y>c : return
  dif = 4**(n-1);
  pos_dif = 2**(n-1) or 1
  if r<x+pos_dif:
    sol(n-1,x,y,value + dif*0)
    sol(n-1,x,y+pos_dif,value + dif*1)
  else:
    sol(n-1,x+pos_dif,y,value + dif*2)
    sol(n-1,x+pos_dif,y+pos_dif,value + dif*3)

sol(n,0,0,0)
print(result)